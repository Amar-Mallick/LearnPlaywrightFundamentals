import { test, expect } from '@playwright/test';
test('Select Dropdown option in herokuapp', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropBox = page.locator("#dropdown");
    // Select by the 'value' attribute from DOM (value="2")
    await dropBox.selectOption("2");

})