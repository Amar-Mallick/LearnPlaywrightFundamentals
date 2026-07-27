import { test, expect } from '@playwright/test';
test("Handle Custom DropDown", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByTestId("framework-trigger").click();
    // await page.locator("//div[@data-value='JavaScript']").click();
    await page.getByRole('option', { name: 'Next.js', exact: true }).click();
    //await page.pause();
})