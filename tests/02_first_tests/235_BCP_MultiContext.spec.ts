import { chromium, Browser, BrowserContext, Page } from 'playwright';
async function multiUserContext() {
    //LEVEL-01: Launch Browser -Do it once
    let browser: Browser = await chromium.launch({ headless: false });
    console.log('Browser Launched ', browser);
    //LEVEL-02:Launch Browser Context as Admin
    let adminContext: BrowserContext = await browser.newContext();
    let adminPage: Page = await adminContext.newPage();
    await adminPage.goto('https://app.vwo.com/login');
    console.log('Admin in LogIn Page');

    //LEVEL-03:Launch Browser Context as User
    let userContext: BrowserContext = await browser.newContext();
    let userPage: Page = await userContext.newPage();
    await userPage.goto('https://app.vwo.com/user');
    console.log('User in  User LogIn Page');

    await userPage.close();
    await userContext.close();
    await adminPage.close();
    await adminContext.close();
    await browser.close();

}
await multiUserContext();