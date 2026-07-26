import { test, expect } from '@playwright/test';
test('select start and end destination of journey using spicejet', async ({ page }) => {
    // 1. Navigate to the SpiceJet homepage
    await page.goto('https://www.spicejet.com/');
    //await page.pause();
    // 2. Click the "From" (Origin) box to open the city selection panel.
    await page.getByTestId('to-testID-origin').click();
    await page.getByTestId('to-testID-origin').locator('input').fill("De");
    // 3. Select 'Delhi' from the opened panel.
    await page.getByText('Delhi', { exact: true }).click();
    // 4. The "To" (Destination) panel opens AUTOMATICALLY on SpiceJet.
    // await page.getByTestId('to-testID-destination').click();(Not required)
    await page.getByTestId("to-testID-destination").locator("input").fill("Ban");
    await page.getByText('Bengaluru', { exact: true }).click();
    //5. optional to verify data............
    await expect(page.getByTestId('to-testID-origin').locator('input')).toHaveValue(/Delhi/i);
    await expect(page.getByTestId('to-testID-destination').locator('input')).toHaveValue(/Bengaluru/);

})