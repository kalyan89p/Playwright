import { test, expect } from '@playwright/test';
 
test('allam bellam kallem @Test001', async ({ page }) => {
  await page.goto('https://www.google.com/');
  console.log('This is a test case for allam bellam kallem');
});
 
test('charu pappu User Test @regression', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  console.log('This is a test case for charu pappu User Test');
});
 
test('Delete User Test @smoke @regression', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  console.log('This is a test case for Delete User Test');
});
 