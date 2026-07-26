import { test, expect } from '@playwright/test';
test("Use pesudo css selector to find an element", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //await page.pause();
    // Uses Playwright's custom :has-text() and standard CSS :first-child
    await page.locator("tr:has-text('Priya.Nair') td:first-child").click();

    /*  We can also use this method to click checkbox but it's not pesudo concepts.
     1. Find the row containing the text
    const row = page.locator('tr').filter({ hasText: 'Priya.Nair' });
    2. Click the first 'td' (column 0) in that specific row
    await row.locator('td').nth(0).click(); */
})