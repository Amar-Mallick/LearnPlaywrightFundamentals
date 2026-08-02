import { test, expect, Locator } from '@playwright/test';
const url = "https://app.thetestingacademy.com/playwright/widgets/svg";
test.describe('SVG elements handle using playwight', () => {
    test.beforeEach(async ({ page }) => {
        //Open the webpage by using url..
        await page.goto(url);
    });
    test('TC_01 : perform action in svg Shape gallery ', async ({ page }) => {
        //Click a SVG ....
        await page.getByTestId("shape-rect-amber").click();
        //Locate output elements
        const output = page.locator('#shapes-output');
        //Validation to  the output....
        await expect(output).toHaveText(/Amber rectangle/);
        await page.waitForTimeout(3000);
    });

})