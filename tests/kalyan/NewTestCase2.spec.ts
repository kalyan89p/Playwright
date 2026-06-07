import { test } from '@playwright/test';
import { CheckoutCompletePage, CheckoutPage, CartPage, InventoryPage, LoginPage } from '../pages/SwagLabsPages';

test.only('completes the checkout flow using page objects', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.waitForLoad();
  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.goToCheckout();

  await checkoutPage.fillCustomerInfo('Kalyan', 'P', '12205');
  await checkoutPage.continue();
  await checkoutPage.finishCheckout();

  await checkoutCompletePage.verifyOrderComplete();
  await checkoutCompletePage.backHome();
});