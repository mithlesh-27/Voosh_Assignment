import { expect } from '@playwright/test';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = '#formBasicEmail';
        this.passwordInput = '#formBasicPassword';
        this.submitButton = "//button[@type='submit']";
        this.okayButton = "//button[normalize-space()='Okay']";// this is the doordash button  as its pop up when looged in
        this.logoutButton = "//span[normalize-space()='Logout']";
        this.userIcon = "//*[@id='user-icon-div']";
        this.logoutConfirm = "//div[@class='logout-modal-button-confirm']";
        this.errorMessage = '.login_error_text';
        this.errorMessageEmail = "//*[@id='root']/div/div[1]/div[2]/div/div/div/div[2]/form/div/span";
        this.forgetPasswordLink = '.checkbox-text';
        this.resetPasswordTitle = '.login_title';
    }

    async navigateToLogin() {
        await this.page.goto('https://dashboard.voosh.ai/promotions');
    }

    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }

    async verifySuccessfulLogin() {
        await this.page.waitForURL(/dashboard/);
    }

    async verifyLoginError() {
        await this.page.waitForSelector(this.errorMessage);
    }

    async clickOkayButton() {
        await this.page.click(this.okayButton);
    }

    async logout() {
        await this.page.click(this.userIcon);
        await this.page.click(this.logoutButton);
        await this.page.click(this.logoutConfirm);
        await this.page.waitForURL('https://dashboard.voosh.ai');
    }

    async verifyForgetPasswordError() {
        await this.page.waitForSelector(this.errorMessageEmail);
        await expect(this.page.locator(this.errorMessageEmail)).toContainText('User not found with given email address');
    }
    
    async forgetPassword(email) {
        await this.page.click(this.forgetPasswordLink);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.submitButton);
        await this.page.waitForTimeout(2000); // Simulating API failure
        return this.page.locator(this.resetPasswordTitle);
    }
}
