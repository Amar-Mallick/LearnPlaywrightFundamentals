import { test, expect } from '@playwright/test';
import { LoginPage } from './LogInPage';
import { InventoryPage } from './InventoryPage';
test.describe('', () => {
    test('Verify TTA Bolt T-Shirt is present on the inventory page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // 1. Login and navigate to Inventory page
        await loginPage.goto();
        await loginPage.login('standard_user', 'tta_secret');

        // 2. Assert that "TTA Bolt T-Shirt" is visible on the page
        await inventoryPage.verifyProductIsDisplayed('TTA Bolt T-Shirt');
    });
})