import { test, expect, Locator } from '@playwright/test';
const url = "https://app.thetestingacademy.com/playwright/widgets/svg";
test.describe('SVG elements handle using playwight', () => {
    test.beforeEach(async ({ page }) => {
        //Open the webpage by using url..
        await page.goto(url);
    });
    test('TC_01 : perform action in svg Shape gallery in react amber ', async ({ page }) => {
        //Click a SVG ....
        await page.getByTestId("shape-rect-amber").click();
        //Locate output elements
        const output = page.locator('#shapes-output');
        //Validation to  the output....
        await expect(output).toHaveText(/Amber rectangle/);
        await page.waitForTimeout(3000);
    });
    test('TC-02 : Get all Shape Gallery items', async ({ page }) => {
        //capture all items present in Shape gellery...
        const allItems = await page.locator("svg#shapes-svg .shape").all();
        /** for (const item of allItems) {
             const itemId = await item.getAttribute('id');
             console.log(`itemId : ${itemId}`); } */
        // Loop from 0 up to the total number of items
        for (let i = 0; i < allItems.length; i++) {
            const itemId = await allItems[i].getAttribute('id');

            // i starts at 0, so (i + 1) gives you 1, 2, 3...
            console.log(`${i + 1}. ${itemId}`);
        }
    });
    test('TC_03 : Click SVG in  Bar chart and vrify it and get all bar name', async ({ page }) => {
        //Get all Bar name...........
        const bars: Locator[] = await page.locator('.chart-svg .bar').all();
        for (let index = 0; index < bars.length; index++) {
            const barName: string | null = await bars[index].getAttribute('data-quarter');
            console.log(`Bar-${index + 1} : ${barName}`);
        }
        //verify Q4 bar click or not.............
        await page.getByTestId('bar-q4').click();
        const barOutput = page.locator('#bars-output');
        // Check if the locator contains the regex/string
        await expect(barOutput).toContainText(/"quarter": "Q4"/);
    });

})