export class PromotionsPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = '.page-title';
        this.overviewHeading = '.overview_heading';
        this.promotionsListBtn = '.see_listings_btn';
        this.location1 = '//body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[1]';
        this.location2 = '//body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[2]/td[1]';
        this.location3 = '//body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[3]/td[1]';
    }

    async verifyPromotionsPage() {
        await this.page.waitForURL(/promotions/);
        await this.page.waitForSelector(this.pageTitle, { state: 'visible' });
    }

    async navigateToDoordash() {
        await this.page.click("//*[@id='filters-container']/div[3]/div[2]");
        await this.page.waitForTimeout(1000);
        await this.page.getByText('See listings').click(); //this is to click see listing button
        await this.page.getByRole('cell', { name: 'Brand' }).nth(1).selectText();
        await this.page.getByRole('cell', { name: 'Brand' }).nth(2).selectText();
        await this.page.getByRole('cell', { name: 'DOORDASH', exact: true }).selectText();
        await this.page.getByRole('cell', { name: 'UBEREATS', exact: true }).selectText();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Status (All)' }).click();
        await this.page.getByRole('radio', { name: 'Active' }).check();
        await this.page.getByRole('cell', { name: 'First Order, $5 Off', exact: true }).selectText();
        await this.page.getByRole('cell', { name: 'First Order, $5 Off 05/24/' }).selectText();
        await this.page.getByRole('cell', { name: 'First Order, $5 Off 08/09/' }).selectText();
        await this.page.locator('tr:nth-child(6) > td > div > .promotions_drilldown_table_child > tbody > tr > td').first();
        await this.page.locator('tr:nth-child(6) > td > div > .promotions_drilldown_table_child > tbody > tr > td:nth-child(2)');
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Location', { exact: true }).first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Brand', { exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Status (Active)' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('radio', { name: 'Completed' }).check();
        await this.page.getByText('Offers').click();
        await this.page.getByRole('cell', { name: 'Spend 20, Save' }).selectText();
        await this.page.getByText('Location', { exact: true }).first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Ubereats' }).click();
        await this.page.getByRole('button', { name: 'Check' }).click();

    }

    async navigateToUberEats() {
        await this.page.getByRole('button', { name: 'Ubereats' }).click();    //this is to  click ubereat button
        await this.page.getByRole('button', { name: 'Check' }).click();       //this is to click check button
        await this.page.click("//*[@id='filters-container']/div[3]/div[2]");  //this is alos to check ubereat button sometimes it is not workingdoes not work/select due to some reason
        await this.page.click("//button[normalize-space()='Check']");         //thisis also to check ubereat button because it shows calender sometimes but when trying it manually its showing only filter to select        await this.page.getByRole('button', { name: 'Campaign ended' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Campaign ongoings' }).click();
        await this.page.click("'Select All'");
        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Apply' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector(this.overviewHeading);
        await this.page.getByRole('button', { name: 'Status (All)' }).click();
        await this.page.getByRole('radio', { name: 'Active' }).check();
        await this.page.click('.level_filter_active');
        await this.page.click(this.location1); //filter by offers after selecting Acive status
        await this.page.click(this.location2); //filter by offers after selecting Acive status
        await this.page.click(this.location3); //filter by offers after selecting Acive status
       
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Location', { exact: true }).first().click();
        await this.page.getByText('Brand', { exact: true }).first().click();
    }
}
