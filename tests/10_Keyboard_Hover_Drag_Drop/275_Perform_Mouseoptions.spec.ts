import { test, expect } from '@playwright/test';
test("perform multiple mouse actions using pw", async ({ page }) => {
    await page.goto("https://thetestingacademy.com/");
    await page.getByText('Our Reviews', { exact: true }).click({ button: "right" });
    await page.waitForTimeout(2000);
    await page.getByText('Blog', { exact: true }).click({ button: 'middle' });

})