import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly addBackpackButton: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartButton = page.locator('#shopping_cart_container');
  }

  async waitForLoad() {
    await expect(this.pageTitle).toBeVisible({ timeout: 45000 });
  }

  async addBackpackToCart() {
    await expect(this.addBackpackButton).toBeVisible({ timeout: 45000 });
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly postalCodeField: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.postalCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.getByRole('button', { name: 'Finish' });
  }

  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;
  readonly title: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('h2', { hasText: 'Thank you for your order!' });
    this.title = page.locator('.title');
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async verifyOrderComplete() {
    await expect(this.completeHeader).toBeVisible();
    await expect(this.title).toHaveText('Checkout: Complete!');
  }

  async backHome() {
    await this.backHomeButton.click();
  }
}
