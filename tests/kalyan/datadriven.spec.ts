import { test, expect } from '@playwright/test';
import * as fs from 'fs';
// Reading JSON file
const jsonData = fs.readFileSync('./SampleTestData.json', 'utf-8');
const jfile = JSON.parse(jsonData);
 var username = jfile.users[0].name; 
 var email = jfile.users[0].email;
 var phone = jfile.users[0].phone;
 var address = jfile.users[0].address;
test.only('has title', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill("//input[@id='name']", username);
    await page.fill("//input[@id='email']", email);
    await page.fill("//input[@id='phone']", phone);
    await page.fill("//textarea[@id='textarea']", address);
    await page.locator("//input[@id='male']").click();
    await page.locator("//input[@id='sunday']").click();
    await page.locator("//input[@id='monday']").click();
    await page.locator("//input[@id='tuesday']").click();
    await page.locator("//input[@id='wednesday']").click();
    await page.locator("//input[@id='thursday']").click();
    await page.locator("//input[@id='friday']").click();
    await page.locator("//input[@id='saturday']").click();
    await page.selectOption("//select[@id='colors']", "red");
    await page.selectOption("//select[@id='country']", "uk");
    await page.selectOption("//select[@id='animals']", "cheetah");
    //await page.locator("//button[@name='start']").click();
    const logo=page.locator("//button[@name='start']");
    await logo.screenshot({     path: './screenshots/logo.png'     });
    await page.screenshot({     path: './screenshots/homepage.png', fullPage: true    });
    await page.locator("//button[@class='dropbtn']").hover();
    await page.locator("//div[@class='dropdown-content']/a[1]").click();
    await page.locator("//button[@class='dropbtn']").hover();
    await page.locator("//div[@class='dropdown-content']/a[2]").click();
    await page.locator("//button[@ondblclick='myFunction1()']").dblclick();
    await page.keyboard.press('ArrowDown')
    const source=page.locator("//div[@id='draggable']")
    const destination = page.locator("//div[@id='droppable']")
    await source.dragTo(destination)
    await page.waitForTimeout(7000);
    await page.close();
    
});