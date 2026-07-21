import { test, expect } from '@playwright/test';
test("Automate Student LogIn ", async ({ page }) => {
    // 1. Store credentials in variables so they can be reused easily...
    const userEmail = "amit@gmail.com";
    const userPassword = "@54321";
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.getByRole('textbox', { name: "email" }).fill(userEmail);
    await page.getByRole('textbox', { name: "password" }).fill(userPassword);
    await page.getByRole('checkbox', { name: "remember" }).click();
    await page.getByRole('button', { name: "Login to Practice Account" }).click();
    //Assertion to check email and password present in url...........
    await expect(page).toHaveURL(new RegExp(userEmail, 'i'));
    await expect(page).toHaveURL(new RegExp(encodeURIComponent(userPassword), 'i'))

    /*1. new RegExp(...)
    RegExp stands for Regular Expression.
    
    Usually, in Playwright, you write a regex using slashes, like /amritta@gmail.com/. But if your text is stored in a variable (like email), JavaScript won't let you write /email/ because it would search for the literal word "email" instead of "amritta@gmail.com".
    
    Using new RegExp(email) allows JavaScript to turn the variable's value into a pattern to search for inside the URL.
    
    2. The 'i' flag
    The 'i' stands for case-insensitive.
    
    It means: treat uppercase and lowercase letters as the same thing. So "AMRITTA@GMAIL.COM", "Amritta@gmail.com", and "amritta@gmail.com" will all match.
    
    3. encodeURIComponent(password)
    When you send special characters like @, #, $, or ? through a website URL, browsers automatically translate them into a computer code called URL Encoding.
    
    Your actual password: @43221
    
    What the browser converts it to in the URL: %4043221 (because @ becomes %40)
    
    If we search the URL for @43221, the test will fail because the browser changed @ to %40.
    
    encodeURIComponent("@43221") automatically converts @43221 into %4043221 before searching the URL, so the test passes smoothly! */

})