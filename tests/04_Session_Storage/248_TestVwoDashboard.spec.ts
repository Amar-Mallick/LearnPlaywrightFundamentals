import { test, expect } from '@playwright/test';
//load save session - already logged in.
test.use({
    storageState: "./user-session.json"
});
test("go directly dashboard without login", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004");
    await expect(page).toHaveURL(/dashboard/);
    await page.waitForTimeout(3000);
});
test("go directly setting without login", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227004");
    await expect(page).toHaveURL(/settings/);
    await page.waitForTimeout(3000);
});