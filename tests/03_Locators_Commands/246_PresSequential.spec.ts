import { test, expect } from '@playwright/test';
test("Locators are lazy ,strict and auto-wait", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    await page.locator("#page-v1-step1-email").pressSequentially("AmarMallick");
    await page.waitForTimeout(7000);
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.goBack();
    await page.waitForTimeout(3000);
})