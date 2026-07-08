import { test, expect } from '@playwright/test';
test('VerifyLogInWithValidCrerdentials', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'tta_secret');
    await page.click('button:has-text("Login")');
    await expect(page).toHaveURL(/.inventory/);
});