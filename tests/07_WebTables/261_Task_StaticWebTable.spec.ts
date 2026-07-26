import { test, expect } from '@playwright/test';

test('Get data from specific table ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const name1 = 'Yoshi Tannamuri';
    //await page.pause();
    const row1 = page.locator('#companies-table tbody tr').filter({ hasText: name1 });
    const countryName = await row1.locator('td.country').innerText();
    console.log(`${name1} belong to  Country ${countryName}`);

})