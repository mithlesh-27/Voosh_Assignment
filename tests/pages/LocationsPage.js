export class LocationsPage {
    constructor(page) {
        this.page = page;
        this.seeLocationButton = '#store-filter-dropdown-arrow';
        this.storeFilterDropdown = "//*[@id='filters-container']/div[1]/div/div/div/div[1]/div[1]/div";
        this.applyFiltersButton = "button:has-text('Apply Filters')";
        this.applybrandFiltersButton = "//*[@id='filters-container']/div[1]/div/div/div/div[1]/div[2]/div";
    }

    async navigateToLocations() {
        await this.page.click(this.seeLocationButton);
    }

    async applyLocationFilters() {
        await this.page.hover(this.storeFilterDropdown);
        await this.page.click(this.storeFilterDropdown);

        // Selecting Locations
        await this.page.getByRole('button', { name: 'Dublin' }).click();
        await this.page.getByRole('button', { name: 'Dallas' }).click();
        await this.page.getByRole('button', { name: 'Carmel' }).click();

        // Selecting Brands
        await this.page.click(this.applybrandFiltersButton);
        await this.page.getByRole('button', { name: 'Pei Wei' }).click();
        await this.page.getByRole('button', { name: 'Cumin Bowl' }).click();
        await this.page.getByRole('button', { name: 'Mix Food Hall' }).click();
        await this.page.getByRole('button', { name: 'Firehouse Subs' }).click();
        await this.page.getByRole('button', { name: 'Dog Haus' }).click();

        // Apply Filters
        await this.page.getByRole('button', { name: 'Apply Filters' }).click();
        await this.page.waitForTimeout(1000);
    }

    async checkOfferDetails() {
        await this.page.getByText('Offers').first().click();
        await this.page.getByRole('row', { name: 'First Order, $5 Off $184,451.' }).getByRole('img').click();
        await this.page.getByRole('cell', { name: 'Location 1' }).nth(1).click();
        await this.page.getByRole('row', { name: 'First Order, $5 Off $184,451.' }).getByRole('img').click();
        await this.page.getByRole('row', { name: 'Spend 20, Save 5 $136,535 New' }).getByRole('img').click();
        await this.page.getByRole('cell', { name: 'Location', exact: true }).click();
        await this.page.getByRole('cell', { name: 'Brand', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator('.promotions_drilldown_table_child > tbody > tr > td > div').first().click();
        await this.page.locator('.promotions_drilldown_table_child > tbody > tr > td:nth-child(2) > div').first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('row', { name: 'Spend 20, Save 5 $136,535 New' }).getByRole('img').click();
        await this.page.getByText('Location', { exact: true }).click();
        await this.page.getByRole('row', { name: 'Location 1 $64,803.99 New' }).getByRole('cell').nth(4).click();
        await this.page.getByRole('cell', { name: 'First Order, $5 Off', exact: true }).click();
        await this.page.getByText('Location 1').nth(1).click();
        await this.page.getByRole('cell', { name: 'Location 1' }).nth(2).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: '2' }).click();
        await this.page.getByRole('cell', { name: 'Location 1' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Brand').nth(1).click();
        await this.page.getByRole('cell', { name: 'Brand 1' })
    }
    
}
