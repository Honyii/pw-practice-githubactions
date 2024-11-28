class CartPage {
    constructor(page) {
        this.page = page;
        this.cartDescLabel = page.locator('.cart_desc_label');
        this.itemName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('.checkout_button');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };