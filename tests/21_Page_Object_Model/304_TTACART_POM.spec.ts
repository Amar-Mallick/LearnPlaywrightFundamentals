import { test, expect } from '@playwright/test';
import { LoginPage } from './TTACART_LogInPage';
test.describe('TTA-Cart LogIn Page Test with POM', () => {
    test('TC_01: verfiy login using valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'tta_secret');
        await expect(page).toHaveURL(/inventory/);
    });
})