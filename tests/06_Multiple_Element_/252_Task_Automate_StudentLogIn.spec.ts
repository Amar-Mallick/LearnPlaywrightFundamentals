import { test, expect } from '@playwright/test';
test("Automate Student LogIn ", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.getByRole('textbox', { name: "email" }).fill("amritta@gmail.com");
    await page.getByRole('textbox', { name: "password" }).fill("@43221");
    await page.getByRole('checkbox', { name: "remember" }).click();
    await page.getByRole('button', { name: "Login to Practice Account" }).click();
    await expect(page).toHaveURL(/.*login-success/);
})