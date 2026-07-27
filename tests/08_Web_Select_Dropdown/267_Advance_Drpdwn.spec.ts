import { test, expect } from '@playwright/test';
test("Advance Dropdown", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    //1-Single Searchable Dropdown............
    await page.getByTestId("rs-single").click();
    await page.getByText("Cypress", { exact: true }).click();
    // await page.waitForTimeout(3000);


    //2- Multi — chips ............
    await page.getByTestId("rs-multi").click();
    await page.getByRole("option", { name: "Playwright" }).click();
    await page.getByRole("option", { name: "Cucumber" }).click();
    await page.getByRole("option", { name: "TestNG" }).click();
    //Remove Playwright ............
    await page.getByRole('button', { name: 'Remove Playwright' }).click();
    await page.keyboard.press("Escape");
    //await page.waitForTimeout(3000);


    //3- Creatable multi — type and Enter
    const searchBox = page.locator("#rs-creatable");
    await searchBox.click();
    // Click to open and select an existing option
    await page.getByRole("option", { name: "performance" }).click();
    // Click the box again to ensure the blinking cursor is active
    await searchBox.click();
    // Simulate typing on the keyboard Type the new skill into the input field
    await page.keyboard.type("Manual Testing");
    await searchBox.press("Enter");
    await page.keyboard.press("Escape");
    await page.waitForTimeout(3000);

    //5 -Async — fetched on type..........
    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('de');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
    await page.getByRole('option', { name: 'Delhi' }).click();
    //await page.pause();





})