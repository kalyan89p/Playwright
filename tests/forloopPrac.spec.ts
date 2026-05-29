import { test, expect } from '@playwright/test';
const dd : string = "//div[@id='nav-search']/form/div/div/div/select"
const ddo: string = "//div[@id='nav-search']/form/div/div/div/select/option"
let continueshopping : string =  "//button[@contains(text(),'Continue Shopping')]"
const url: string='https://www.amazon.in/'
let element: string[]; 
test('test', async ({ page }) => {  
await page.goto(url);
//await page.locator(continueshopping).click()
await page.locator(dd).click()
var x =await page.locator(ddo).count()
var i=0
element = await page.locator(ddo).allTextContents()

 //for ( i=0;i<element.length;i++)
 //console.log( await page.locator(ddo).nth(i).textContent())
//      console.log(element[i])
// console.log("####for loop executed###")
// if(i=element.length)i=0
// while (i<element.length){
//     console.log(element[i])
//     i++
// }
// if(i=element.length)i=0
// console.log("####while loop executed###")
// do{
//     console.log(element[i])
//     i++
//     }while(i<element.length);
// console.log("####do-while loop executed###")

let searchbox: string ="//input[@id='twotabsearchtextbox']"
let searchString = "Shoes"
let bhootaddam = "//input[@id='nav-search-submit-button']"
let resultElement : string = "//div[@cel_widget_id='UPPER-RESULT_INFO_BAR-0']/h1/div/div/div/div/div/h2/span[1]"


await page.locator(searchbox).fill(searchString)
await page.locator(bhootaddam).click()
console.log("bhootaddam click AINDI")
//await page.waitForTimeout(3000);
await expect(page.locator(resultElement)).toBeVisible({ timeout: 10000 });

console.log("RESULT ELEMENT IS VISIBLE")

var result =await page.locator(resultElement).innerText()

console.log("IDI RESULT TEXT : " ,result)
var first = result.split(" ")
console.log(" IDI ARRAY ", first)

//var zeroth = first[0]
console.log("FIRST INDEX",  first[0])
//var fourth = first[3]
console.log("FOURTH INDEX",  first[3])



});