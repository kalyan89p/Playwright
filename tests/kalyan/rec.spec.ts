import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Kalyan');  
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.locator('div:nth-child(11) > div').first().click();
  
  await page.locator('.form-group > div:nth-child(5)').click();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.locator('div:nth-child(7)').first().click();

const days = page.locator('input.form-check-input[type="checkbox"]');
// Sunday
await days.nth(0).check();
// Monday
await days.nth(1).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.locator('#datepicker').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '30' }).click();
  await page.getByPlaceholder('Start Date').fill('2026-06-01');
  await page.getByPlaceholder('End Date').fill('2026-06-30');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await page.locator('#draggable').click();
  await page.getByText('Drag me to my target').click();
  await page.locator('#draggable').click();
  await page.locator('.ui-slider-handle').first().click();
  await page.locator('.ui-slider-range').click();
});