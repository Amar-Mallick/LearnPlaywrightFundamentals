import { test, expect } from '@playwright/test';
test("Handle Custom DropDown", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByTestId("dropdown-language").click();
    // await page.locator("//div[@data-value='JavaScript']").click();
    await page.getByRole('option', { name: 'Java', exact: true }).click();
    await page.pause();
})