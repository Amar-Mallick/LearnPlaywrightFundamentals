import { test, expect } from "@playwright/test";
test('Perform mouse double click Action', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    //Find locator of 1st Textbox
    const txtBox1 = page.locator("#field1");
    const txtBox2 = page.locator("#field2");
    //Select all Text and Delete using keyboard & write new text
    await txtBox1.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    let text: string = "Amar Mallick";
    await txtBox1.fill(text);
    //use Double click option to copy box 1 text into box2.
    await page.getByRole('button', { name: "Copy Text" }).dblclick();
    await expect(txtBox2).toHaveValue(text);

})