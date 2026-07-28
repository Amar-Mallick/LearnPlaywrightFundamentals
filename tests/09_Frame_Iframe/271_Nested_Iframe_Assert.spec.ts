import { test, expect } from '@playwright/test';

test("Fill and Assert Three deeply nested iframes", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");

    // 1. Define your Frame Locators
    const frame1 = page.frameLocator('#pact1');
    const frame2 = frame1.frameLocator('#pact2');
    const frame3 = frame2.frameLocator('#pact3');
    // 2. Define the actual Input Element Locators inside those frames
    const input1 = frame1.locator('[name="inp_val"]');
    const input2 = frame2.locator('#jex');
    const input3 = frame3.locator('#glaf');

    // 3. ACTION: Fill each level with a different value
    await input1.fill('Automation');
    await input2.fill('Playwright');
    await input3.fill('Testing');

    // 4. ASSERTION: Verify the values were entered correctly
    await expect(input1).toHaveValue('Automation');
    await expect(input2).toHaveValue('Playwright');
    await expect(input3).toHaveValue('Testing');
});