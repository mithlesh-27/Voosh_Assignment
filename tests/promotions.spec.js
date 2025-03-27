import { test } from '@playwright/test';
import {LoginPage} from './pages/LoginPage';
import {PromotionsPage} from './pages/PromotionsPage';

test.describe('Promotions Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.login('demo@voosh.in', 'admin@demo');
        await loginPage.clickOkayButton();
    });

    test('Navigate to Promotions page', async ({ page }) => {
        const promotionsPage = new PromotionsPage(page);
        await promotionsPage.verifyPromotionsPage();
        console.log('✅ Test case Passed - Promotions page verified successfully');
    });

    test('Navigate to Promotions dashboard page', async ({ page }) => {
        const promotionsPage = new PromotionsPage(page);
        await promotionsPage.navigateToDoordash();
        console.log('✅ Test case Passed - Promotions dashboard page verified successfully');
    });

    test('Navigate to UberEats page', async ({ page }) => {
        const promotionsPage = new PromotionsPage(page);
        await promotionsPage.navigateToUberEats();
        console.log('✅ Test case Passed - UberEats page verified successfully');
    });
});
