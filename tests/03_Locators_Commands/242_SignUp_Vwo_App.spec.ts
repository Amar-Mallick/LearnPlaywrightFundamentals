import { test, expect } from '@playwright/test';
test("verify the vwo signup page an error message with the incorrect email id", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    await page.locator("#page-v1-step1-email").fill("asre@com");
    await page.locator("//input[starts-with(@id,'page-free-trial-step1')]").click();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();
    let errorMsg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(errorMsg).toContain("The email address you entered is incorrect");
});