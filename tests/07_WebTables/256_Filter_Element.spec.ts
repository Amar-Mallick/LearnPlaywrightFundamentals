import { test, expect } from '@playwright/test';
test("verify element using filter", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const transactionLink = page.locator(".list-group-item").filter({ 'hasText': "Transactions" });
    await transactionLink.click();
})