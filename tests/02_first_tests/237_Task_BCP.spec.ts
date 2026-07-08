import { test, expect } from '@playwright/test';
test('Context-01 For TTACART And & Context- 02  For TTABANK', async ({ browser }) => {
    let context01 = await browser.newContext();
    let page01 = await context01.newPage();
    await page01.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    console.log("Context-01: TTACART ");
    let context02 = await browser.newContext();
    let page02 = await context02.newPage();
    await page02.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
    console.log("Context-02 TTABANK");

    await context01.close();
    await context02.close();

});