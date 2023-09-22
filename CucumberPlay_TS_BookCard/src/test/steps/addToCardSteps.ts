import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
// let page : Page;

Then('user search for a {string}', async function (book) {
    pageFixture.logger.info("Searching for a book" + book);
    await pageFixture.page.locator(`input[type='search']`).fill(book);
    await pageFixture.page.waitForTimeout(2000);
    await pageFixture.page.locator(`mat-option[role='option'] span`).click();
});

When('user add the book to the cart', async function () {
    // await pageFixture.page.waitForTimeout(3000);
    const addCad = `//button[@color='primary']`;
    await pageFixture.page.waitForSelector(addCad)
    await pageFixture.page.locator(`//button[@color='primary']`).click();
});

Then('the cart badge should get updated', async function () {
    await pageFixture.page.waitForTimeout(3000);
    const badgeCount = await pageFixture.page.locator(`#mat-badge-content-0`).textContent();
    console.log(badgeCount);
    expect(Number(badgeCount)).toBeGreaterThan(0);
});