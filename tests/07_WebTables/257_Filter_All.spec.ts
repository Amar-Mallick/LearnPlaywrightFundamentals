import { test, expect } from '@playwright/test';
test("verify element using filter", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const linkLocators = await page.locator(".list-group-item").all();

    const expectText = "Returns";
    //  Loop through the array one by one
    for (const link of linkLocators) {
        //Get the text of the current element
        const linkText = await link.textContent();
        //  Check if it matches what you want
        if (linkText === expectText) {
            await link.click();
            break;
        }
    }

    // await transactionLink.click();
})