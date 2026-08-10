/**Soft Assertions :-> 1)If [ soft ] keyword is used in assertions it's a soft Assertions.
 * 2)If soft assertions syntax failed it will be log and execute next line .
 * but,In Hard assertions if it failed it's not execute next line .It's make failed test.
 */
import { test, expect } from '@playwright/test';
const url = 'https://app.thetestingacademy.com/playwright/tables/practice#page';
test.describe('Soft Assertions in Playwright', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01:Use only Firstname and Lastname and save files without fill the form all informations ', async ({ page }) => {

        await page.fill('#first-name', 'Amar');//use ID locator here
        await page.fill('[name="lastName"]', 'Mallick');//use name locator here
        let genderBtn = await page.getByLabel('Gender').getByText('Male', { exact: true }).check();
        let sumbitBtn = page.getByTestId('profile-submit');
        await sumbitBtn.click();
        let output = page.locator('#submission-output');
        //await expect.soft(output).toContainText(/Female/); ❌ FAIL
        await expect.soft(output).toContainText(/Male/);//✅ PASS
        /**Step-by-Step Execution Flow
        1) First Soft Assertion (/Female/): ❌ FAILS
        The output text contains "gender": "Male", not Female.
        Playwright logs this failure in the report, but does not halt execution because .soft was used.
        2)Second Soft Assertion (/Male/): ✅ PASSES
        Execution continues to this line. Playwright evaluates the text, finds "Male", and marks this step as successful.
        3)Final Test Verdict: ❌ FAILED
        Even though the test didn't stop on the first failure, Playwright marks the overall test run as FAILED at the end because at least one soft assertion failed. */
    });
});