import{test,expect} from '@playwright/test';
test('My first test',async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.locator("//input[@id='twotabsearchtextbox']").click();
    await page.fill("//input[@id='twotabsearchtextbox']", 'soap');
    await page.locator ("//input [@id='nav-search-submit-button']").click();
    await expect(page.locator("//*[contains(text),'Get It by Tomorrow')]")).toBeVisible({timeout: 45000}); 
    await page.locator("//*[contains(text(),'Get It by Tomorrow')]").click();    
});