class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item_name');
        this.addToCartButton = page.locator('.btn_inventory').first();
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addFirstItemToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async getFirstItemName() {
        return await this.inventoryItems.first().textContent();
    }
}

module.exports = { InventoryPage };