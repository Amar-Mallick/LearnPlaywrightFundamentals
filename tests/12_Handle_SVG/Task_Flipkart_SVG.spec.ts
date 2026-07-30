import { test, expect } from "@playwright/test";
const url = "https://www.flipkart.com/search";
test.describe("Flipkart search via the svg", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('TC_01 : Find the cheapest Macmini while search in Flipkart', async ({ page }) => {

        //Locate the search box and fill it in one single line
        // await page.locator('input [name="q]').fill("macmini");
        await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("macmini");
        // Clicking on the Search Icon svg...
        await page.locator('svg').first().click();
        // Print the title of all the result items  


    });

})