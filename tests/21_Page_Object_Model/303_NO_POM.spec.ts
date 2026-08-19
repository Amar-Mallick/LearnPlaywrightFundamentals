import { test, expect } from '@playwright/test';
const url = "https://app.thetestingacademy.com/playwright/ttacart/";
test.describe('Run test without POM ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01:verify tta-cart login with valid credentials', async ({ page }) => {
        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "tta_secret");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page).toHaveURL(/inventory/);
    })
})
