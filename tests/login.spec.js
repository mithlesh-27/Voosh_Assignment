import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Login Tests', () => {
    
    test('✅ Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.login('demo@voosh.in', 'admin@demo');
        await loginPage.verifySuccessfulLogin();
        console.log('✅ Test case Passed - Login Successful');
    });

    test('❌ Login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.login('invalid@voosh.in', 'wrongpassword');
        await loginPage.verifyLoginError();
        console.log('✅ Test case Passed - Invalid Login Detected');
    });

    test('🔓 Logout Functionality', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.login('demo@voosh.in', 'admin@demo');
        await loginPage.clickOkayButton();
        await loginPage.logout();
        console.log('✅ Test case Passed - Logout Successful');
    });

    test('🚫 Forget Password - Invalid Email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.forgetPassword('invalid@voosh.in');
        await loginPage.verifyForgetPasswordError();
        console.log('✅ Test case Passed - Invalid Email Detected in Forget Password');
    });
    

    test('🔄 Forget Password - API Failure Simulation', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.forgetPassword('demo@voosh.in');

        /* this is to check if the reset password page is displayed as i am simulating the api failure because 
        i am not able to receive the email  it dont have any email server so  i am using this to simulate the api 
        failure by passing mytest email that isprovided to me*/
        await expect(page.locator('.login_title')).toContainText('Reset Password');
        console.log('✅ Test case Passed - Reset Password Page Displayed');
    });
});
