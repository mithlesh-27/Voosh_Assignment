import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { LocationsPage } from './pages/LocationsPage';

test.describe('Locations Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.login('demo@voosh.in', 'admin@demo');
        await loginPage.clickOkayButton();
    });

    test('Location Filters', async ({ page }) => {
        const locationsPage = new LocationsPage(page);
        await locationsPage.navigateToLocations();
        await locationsPage.applyLocationFilters();
        
        // Adding an assertion to check if filters are applied or not
        const appliedFiltersText = page.locator('.level_filter_active'); 
        await expect(appliedFiltersText).toBeVisible();
        
        await locationsPage.checkOfferDetails();
        console.log('✅Test Passed - Location Filters Applied successfully');
    });
});
