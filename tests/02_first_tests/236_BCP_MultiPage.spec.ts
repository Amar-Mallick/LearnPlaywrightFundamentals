import { chromium, Browser, BrowserContext, Page } from 'playwright';
async function multiPageTest() {
    let browser = await chromium.launch({ headless: false });
    let BrowserContext = await browser.newContext();
    //Tab1......
    let page1 = await BrowserContext.newPage();
    await page1.goto('https://App.VWO.com');
    console.log('Tab1:Dashboard');

    //Tab2......
    let page2 = await BrowserContext.newPage();
    await page2.goto('https://App.VWO.com/#Dashborad');
    console.log('Tab2:Dashboard Settings');
    await BrowserContext.close();
    await browser.close();
}
await multiPageTest();