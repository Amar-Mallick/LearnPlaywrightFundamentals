import { test, expect } from '@playwright/test';
test("Find  data from Webtable using loop ", async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable.html");

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();
    console.log(`rows header also count :${rows} `);
    console.log(`columns : ${columns}`);
    const targetName = "Yoshi Tannamuri";
    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            // Step 1: Create locator for current cell (i = row, j = column)
            const cellLocator = page.locator(`//table[@id='customers']/tbody/tr[${i}]/td[${j}]`);
            // Step 2: Extract text inside that cell
            const cellText = await cellLocator.innerText();
            // Step 3: Print cell data to console
            console.log(`Row ${i}, Column ${j} value is:${cellText}`);
            if (cellText.includes(targetName)) {
                // Use following-sibling::td to get the next cell (Country)
                const countryLocator = cellLocator.locator("xpath=./following-sibling::td");
                const countryName = await countryLocator.innerText();
                console.log(`Found ${targetName}! Country is: ${countryName}`);
                break;
            }
        }
    }
})