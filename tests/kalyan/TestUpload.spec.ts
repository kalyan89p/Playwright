import { expect, test } from '@playwright/test';
test('Upload File', async ({ page }) => {
await page.goto('https://www.file.io/');
const filePath = './screenshots/homepage.png';
await page.waitForTimeout(5000);
await page.locator("//input[@id='select-files-input']").setInputFiles(filePath);
await page.waitForTimeout(3000);
//await expect(page.locator("//h3[contains(text(),'New Text Document.txt')]")).toBeVisible({ timeout: 30000 });
});