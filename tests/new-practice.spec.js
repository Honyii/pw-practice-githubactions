const { expect, test } = require('@playwright/test');
const { LoginPage } = require('./page-objects/login.page');
const { InventoryPage } = require('./page-objects/inventory.page');
const { CartPage } = require('./page-objects/cart.page');
const { CheckoutPage } = require('./page-objects/checkout.page');

test.describe('Swag Labs E2E Test', () => {
    test('should complete purchase flow successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Login
        await loginPage.goto();
        await expect(loginPage.credentialsInfo).toContainText('Accepted usernames are: ');
        await loginPage.login('standard_user', 'secret_sauce');

        // Product selection
        await expect(inventoryPage.inventoryItems.first()).toBeVisible();
        await inventoryPage.addFirstItemToCart();
        await expect(inventoryPage.addToCartButton).toHaveText('Remove');
        await inventoryPage.goToCart();

        // Cart verification
        await expect(cartPage.cartDescLabel).toBeVisible();
        await expect(cartPage.itemName).toHaveText('Sauce Labs Backpack');
        await cartPage.proceedToCheckout();

        // Checkout process
        await expect(checkoutPage.firstNameInput).toBeVisible();
        await checkoutPage.continue();
        await expect(checkoutPage.errorMessage).toContainText('First Name is required');

        await checkoutPage.fillShippingInfo('amech', 'nony', '34545');
        await checkoutPage.continue();
        
        await expect(checkoutPage.summaryInfo).toBeVisible();
        await checkoutPage.finishOrder();
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });
});
