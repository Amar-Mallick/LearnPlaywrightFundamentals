import { test, expect, FrameLocator, Locator } from '@playwright/test';
test("Handle Three deeply nested iframes", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
    //Interact with 1st IFrame.....
    await page.frameLocator('#pact1').locator('[name="inp_val"]').fill('Automation Testing');
    //Interact with 2nd  IFrame.....
    await page.frameLocator('#pact1').frameLocator('#pact2').locator('#jex').fill('Playwright');
    //Interact with 3rd IFrame.....
    const iframe2 = page.frameLocator('#pact1').frameLocator('#pact2');
    await iframe2.frameLocator('#pact3').getByPlaceholder('e.g. Playwright').fill('AI Testing');
})