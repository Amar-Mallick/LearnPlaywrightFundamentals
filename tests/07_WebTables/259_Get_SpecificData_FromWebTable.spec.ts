import { test, expect } from '@playwright/test';

test('Get data from specific table ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const name = 'Ananya Iyer';
    const row = page.locator('#employees-table tbody tr').filter({ hasText: name });
    const emailId = await row.locator('//td[@data-col="email"]').allTextContents();
    const country = await row.locator('.country').allTextContents();
    console.log(`${name} EmailID ${emailId} and Country ${country}`);

})