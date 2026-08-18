import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
test.describe(' Use faker-js to create random realstic data', () => {
    const url = "https://app.thetestingacademy.com/playwright/ttacart/";
    const userData = {
        username: "standard_user",
        userpassword: "tta_secret"
    };
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01: use real data for login test', async ({ page }) => {
        await page.fill('#user-name', userData.username);
        await page.fill('#password', userData.userpassword);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/inventory/);
        await page.waitForTimeout(2000);

    });

    //01- use faker Js with Parameterized Loop (Crates Separate Test Runs)
    const testcases = [1, 2, 3];//Set here howmany itteration you want 
    for (const index of testcases) {
        test(`TC_02:use faker js random data ${index}`, async ({ page }) => {
            const username = faker.person.fullName();
            const password = faker.internet.password();//by default faker create 15 characters password

            await page.fill('#user-name', username);
            await page.fill('#password', password);
            await page.getByRole('button', { name: 'Login' }).click();
            const errormsg = page.locator('#login-error');
            await expect(errormsg).toBeVisible();

        });

    };
    //02- use faker Js with single test and inner   Loop 
    test('TC_03:use faker js  data ', async ({ page }) => {
        for (let i = 0; i < 5; i++) {
            const username = faker.person.fullName();
            const password = faker.internet.password();//by default faker create 15 characters password
            await page.fill('#user-name', username);
            await page.fill('#password', password);
            await page.getByRole('button', { name: 'Login' }).click();
            const errormsg = page.locator('#login-error');
            await expect(errormsg).toBeVisible();

        }


    })

})