// tests/sample.spec.ts

import { test, expect, Page } from '@playwright/test';

test('Handle confirm popup and validate second page', async ({ page, context }) => {

  await page.goto('file:///C:/Users/patlo/Downloads/Playwrite/New Folder/warning/index.html');


  // Wait for new tab
  const pagePromise = context.waitForEvent('page');

  // Handle browser confirm popup
  page.on('dialog', async dialog => {
    console.log('Dialog Message:', dialog.message());
    await dialog.accept();
  });
await page.waitForTimeout(3000);
  // Click button
  await page.locator('#openButton').click();

  // Capture second tab
  const newPage: Page = await pagePromise;
await page.waitForTimeout(3000);

});