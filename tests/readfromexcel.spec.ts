import { expect, test } from '@playwright/test';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
  const url = 'https://www.saucedemo.com/'
  const usernameelement = "//input[@id='user-name']"
  const passwordelement = "//input[@id='password']"
  const loginbuttonelement = "//input[@id='login-button']"
test.only('has title', async ({ page }) => { 
  const workbook = new ExcelJS.Workbook();
  const filePath = path.resolve(__dirname, '../Credentials.xlsx');
  await workbook.xlsx.readFile(filePath);
  const sheet = workbook.getWorksheet(2);
  const row2 = sheet.getRow(1);
  const username = row2.getCell(2).text;
  const row = sheet.getRow(2);
  const password = row.getCell(2).text;
  if (!sheet) {
  throw new Error('Sheet $ $ $ $. not found');
  }
  console.log(username, password);
  await page.goto(url)
  await page.fill(usernameelement, username)
  const newname=await page.locator(usernameelement).inputValue()
  console.log(newname)
  await page.fill(passwordelement, password)
  const newpassword=await page.locator(passwordelement).inputValue()
  console.log(newpassword)
  await page.locator(loginbuttonelement).click()
 });