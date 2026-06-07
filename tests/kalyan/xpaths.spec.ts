import { test,expect,request } from '@playwright/test';
let orangeElement: string="//li[@class='fruit special-fruit']";
let raviElement: string="//li[@class='fruit special-fruit']/parent::ul/parent::section/preceding-sibling::section[@id='tableSection']/table/tbody/tr[2]/td[2]";
test('test', async ({ page }) => {  
await page.goto('file:///C:/Users/patlo/Downloads/Playwrite/NewFolder/sample.html');
console.log(await page.locator(orangeElement).textContent());
console.log(await page.locator(raviElement).textContent());
});