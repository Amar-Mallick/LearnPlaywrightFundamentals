import { test, expect } from "@playwright/test";
test("Find an element direct", async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter ');
    await page.pause();
    await page.getByRole('link', { name: 'Login ›' }).click();

});