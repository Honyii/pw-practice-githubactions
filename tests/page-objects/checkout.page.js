class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('input[value="Continue"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.summaryInfo = page.locator('.summary_info');
        this.finishButton = page.locator('.cart_button');
        this.completeHeader = page.locator('.complete-header');
    }

    async fillShippingInfo(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continue() {
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }
}

module.exports = { CheckoutPage };