import { test, expect, Locator } from "@playwright/test";
const url = "https://www.flipkart.com/search";
test.describe("Flipkart search via the svg", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('TC_01 : Find the cheapest Macmini from first page while search in Flipkart', async ({ page }) => {

        //Locate the search box and fill it in one single line
        // await page.locator('input [name="q]').fill("macmini");
        await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("macmini");
        // Clicking on the Search Icon svg...
        await page.locator('svg').first().click();
        await page.waitForLoadState('networkidle');
        //Capture all items 
        let allSearchItems: Locator = page.locator('//div[contains(@data-tkid,".SEARCH")]');
        // await allSearchItems.
        //Count all items present in this specific search.....
        const searchItemSize = await allSearchItems.count();
        console.log(`Total Product available in this search : ${searchItemSize}`);

        // Print the title of all the result items  
        for (let i = 0; i < searchItemSize; i++) {
            //  Isolate the specific product card
            const singleProduct = allSearchItems.nth(i);
            // 2. Locate the title element INSIDE that specific product card
            const title = await singleProduct.locator('.pIpigb').innerText();
            // 3. Print it to the console
            console.log(`Item ${i + 1}: ${title}`);
        }
        //Get cheaper price available for mcmini..........

        // 1. Create an empty JavaScript array
        let priceList: number[] = [];

        // 2. Extract price from each card and push into the array
        for (let i = 0; i < searchItemSize; i++) {
            const singleProduct = allSearchItems.nth(i);

            // Locate price using pure Playwright (replace class name if needed)
            const priceLocator = singleProduct.locator("//a[@class='fb4uj3']").first();

            if (await priceLocator.isVisible()) {
                const priceText = await priceLocator.innerText(); // e.g. "₹59,900"

                // Strip "₹" and "," to turn into integer 59900
                const numericPrice = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
                // Only add to the array if numericPrice is an actual number
                if (!Number.isNaN(numericPrice)) {
                    priceList.push(numericPrice);
                }

            }
        }

        console.log("All extracted prices array:", priceList);

        // ==========================================
        // 2 WAYS TO COMPARE ARRAY VALUES
        // ==========================================

        //  WAY A: Sort the Array from lowest to highest
        //  priceList[0] will be the smallest number
        // priceList.sort((a, b) => a - b);
        // console.log(`Cheapest price (via Array Sort): ₹${priceList[0]}`);

        // WAY B: Use Math.min on the Array
        const cheapestPrice = Math.min(...priceList);
        console.log(`Cheapest price (via Math.min): ₹${cheapestPrice}`);
    });


});

