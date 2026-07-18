import { test, expect } from '@playwright/test';

test.use({
    storageState: "./user-session.json",
    navigationTimeout: 60000,
});

test.describe("VWO Dashboard E2E Tests @P1 @smoke", () => {

    test("go directly dashboard without login", async ({ page }) => {

        await test.step("Navigate to VWO Dashboard", async () => {
            await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004", {
                waitUntil: "domcontentloaded"
            });
        });

        await test.step("Verify Dashboard URL", async () => {
            await expect(page).toHaveURL(/dashboard/);
        });

        await test.step("Verify Dashboard page has loaded content", async () => {
            await expect(page.locator('body')).not.toBeEmpty();
        });

        await test.step("Capture Dashboard Screenshot", async () => {
            await page.waitForTimeout(3000);
            await page.screenshot({ path: "tta-report/screenshots/dashboard-overview.png", fullPage: true });
        });
    });

    test("go directly setting without login", async ({ page }) => {

        await test.step("Navigate to VWO Settings Page", async () => {
            await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227004", {
                waitUntil: "domcontentloaded"
            });
        });

        await test.step("Verify Settings URL", async () => {
            await expect(page).toHaveURL(/settings/);
        });

        await test.step("Verify Settings page has loaded content", async () => {
            await expect(page.locator('body')).not.toBeEmpty();
        });

        await test.step("Capture Settings Screenshot", async () => {
            await page.waitForTimeout(3000);
            await page.screenshot({ path: "tta-report/screenshots/settings-page.png", fullPage: true });
        });
    });

});
