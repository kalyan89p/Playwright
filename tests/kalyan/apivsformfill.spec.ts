import { test,expect,request } from '@playwright/test';
//...fixture...
//
test('apivsformfill', async ({ page }) => {

//steps
//get the data https://api.restful-api.dev/objects
// get the first name [1] and data.color [0] from the response. 
// save them in local variables 
// launch testautomationpractice.blogspot.com
// enter local name into website name text box. 
// enter local color int website email text box. 
const apihandling = await request.newContext();
const res = await apihandling.get('https://api.restful-api.dev/objects');
expect(res.status()).toBe(200);
const body = await res.json();
console.log(body);
const name = body[1].name;
const color = body[0].data.color;
console.log(name);
console.log(color);

await page.goto('https://testautomationpractice.blogspot.com/');
await page.fill('#name', name);
await page.fill('#email', color);
await page.waitForTimeout(5000);   

console.log("form filled successfully");
});