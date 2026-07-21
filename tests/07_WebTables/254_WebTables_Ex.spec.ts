import { test, expect } from '@playwright/test';
test("Find data from webtable ", async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable1.html");
    const rows = page.locator("table[summary = 'Sample Table'] tbody tr");
    const rowCount = await rows.count();
    console.log(`Row Size : ${rowCount}`);

    for (let r = 0; r < rowCount; r++) {
        /*In Playwright TypeScript, locator.nth(index) returns a new Locator
         targeted to the single element at the specified zero-based index from a list of matching elements. */
        const rowData = await rows.nth(r).locator('td').allInnerTexts();
        console.log(`Row ${r + 1} :`, rowData);


    }
})