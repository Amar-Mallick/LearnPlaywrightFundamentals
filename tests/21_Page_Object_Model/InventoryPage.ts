import { Page, Locator, expect } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Locates a product link using exact text matching to satisfy Playwright's strict mode.
     */
    getProductByName(productName: string): Locator {
        return this.page.getByRole("link", { name: productName, exact: true });
    }

    /**
     * Verifies that a specific product is visible on the page.
     */
    async verifyProductIsDisplayed(productName: string): Promise<void> {
        const product = this.getProductByName(productName);
        await expect(product).toBeVisible();
    }
}