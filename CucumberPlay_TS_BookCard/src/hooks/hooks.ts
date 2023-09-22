import {BeforeAll,AfterAll, Before, After, Status} from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getENV } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";

let context: BrowserContext;
let browser: Browser;

BeforeAll(async() => {
    getENV();
    browser = await invokeBrowser();
})

Before(async({pickle}) => {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
});

After(async({pickle, result}) => {
    // screenshot
    console.log(result?.status);
    if(result?.status == Status.FAILED) {
    const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png` ,type:`png`});
    // await global.attach(img, "image/png");

    }
    await pageFixture.page.close()
    await context.close();
})

AfterAll(async() => {
    await browser.close();
    pageFixture.logger.close();
})