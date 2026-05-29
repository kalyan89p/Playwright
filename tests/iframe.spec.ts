import { test, expect } from '@playwright/test';
test.only('has title', async ({ page }) => {
    await page.goto('http://letcode.in/frame');
    const myframe = page.frameLocator('#firstFr');
    await myframe.locator("//input[@name='fname']").fill("Dinesh Neela");
    await myframe.locator("//input[@name='lname']").fill("dineshneela2512@gmail.com");
    await page.waitForTimeout(5000);
    });
 