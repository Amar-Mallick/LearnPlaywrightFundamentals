import { test, expect } from '@playwright/test';
test('VerifyTitleOfPage', async ({ page }) => {
    await page.goto("https://vwo.com/");
    await expect(page).toHaveTitle("VWO | Digital Experience Optimization");
});