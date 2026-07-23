import { test, expect } from '@playwright/test';
test("Handling OrangeHRM  Employee WebTable  ", async ({ page }) => {
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    //await page.pause(); use only debugg purpose.
    const username = "admin";
    const password = "Awesomeqa@4321";
    await page.getByRole('textbox', { name: 'username' }).fill(username);
    await page.getByRole('textbox', { name: 'password' }).fill(password);
    await page.getByRole('button', { name: ' Login ' }).click();
    await expect(page).toHaveURL(/viewEmployeeList/);
    const rows = page.locator('.oxd-table-card');
    // ADDED LINE: Wait for at least the first row to appear before counting
    await rows.first().waitFor();
    const rowSize = await rows.count();
    for (let i = 0; i < rowSize; i++) {
        const currentRow = rows.nth(i);
        const rowData = await currentRow.locator('.oxd-table-cell').allTextContents();
        if (rowData.includes("Terminated")) {
            await currentRow.locator('.oxd-icon.bi-trash').click();
            break;
        }

    }
})