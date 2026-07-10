import { test, expect } from '@playwright/test';
test("find Relative X-path of CURA Healthcare Service", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.click('#btn-make-appointment');
    await page.locator("//input[@id='txt-username']").fill("John Doe");
    await page.locator("//input[@id='txt-password']").fill("ThisIsNotAPassword");
    await page.click("//button[@id='btn-login']");
    await expect(page).toHaveURL(/.*#appointment$/);
    const faciltyDropDownXpath = page.locator("//select[@id='combo_facility']");
    const checkBoxXpath = page.locator("//input[@id='chk_hospotal_readmission']");
    await checkBoxXpath.click();
    const calenderXpath = page.locator("//input[@name='visit_date']");
    const commentBoxXpaath = page.locator("//textarea[@id='txt_comment']");
    const appointmentButtonXpath = page.locator("//button[@id='btn-book-appointment']");


})