import { expect, test } from '@playwright/test';
test('Upload File', async ({ page }) => {
// await page.goto('https://testautomationpractice.blogspot.com/');
// const filePath = './playwright.config.ts';
// await page.waitForTimeout(5000);
// await page.locator("//button[contains(text(),'Upload Single File')]").setInputFiles(filePath);
// await page.locator("//button[contains(text(),'Upload Multiple Files')]").click()
// await page.locator("//button[contains(text(),'Upload Multiple Files')]").setInputFiles([   './playwright.config.ts',   'path/to/file2.txt',   'path/to/file3.pdf']);
// await page.waitForTimeout(3000);
//await expect(page.locator("//h3[contains(text(),'New Text Document.txt')]")).toBeVisible({ timeout: 30000 });

await page.goto('https://www.amazon.in/')
await page.getByTitle('Go').click();
});