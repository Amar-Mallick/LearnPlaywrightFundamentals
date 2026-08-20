import { Locator, Page } from '@playwright/test';
export class LoginPage {
    //01-> Page Locators............
    readonly page: Page;
    readonly usernameinput: Locator;
    readonly userpasswordinput: Locator;
    readonly loginbutton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameinput = page.locator('#user-name');
        this.userpasswordinput = page.locator('#password');
        this.loginbutton = page.getByRole("button", { name: "Login" });
    }
    //02-> Page Actions.............
    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    };
    async login(uname: string, upwd: string) {
        await this.usernameinput.fill(uname);
        await this.userpasswordinput.fill(upwd);
        await this.loginbutton.click();
    };
}
