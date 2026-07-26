import { test, expect, errors } from '@playwright/test';

test('Get data from pagination Web table ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const name = 'Aiko Mori';
    const nextButton = page.locator('#next-page');
    const row = page.locator('#employees-table tbody tr').filter({ hasText: name });
    while (await row.count() === 0) {
        if (await nextButton.isDisabled()) {
            throw new Error(`Row with Name ${name} not found`);
        }
        await nextButton.click();
    }

    const emailId = await row.locator('//td[@data-col="email"]').allTextContents();
    const country = await row.locator('.country').allTextContents();
    console.log(`${name} EmailID ${emailId} and Country ${country}`);

})