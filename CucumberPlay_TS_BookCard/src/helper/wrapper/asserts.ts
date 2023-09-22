import { Page, expect } from "@playwright/test";


export default class Assert {

    constructor(private page : Page) {

    }

    async assertTitle(title : string) {
        await expect(this.page).toHaveTitle(title);
    }

    async assertTitleContains(title : string) {
        const pageTitle = await this.page.title();
        expect(pageTitle).toContain(title);
    }

    async assertUrl(url : string) {
        await expect(this.page).toHaveURL(url);
    }

    async assertUrlContains(title : string) {
        const pageUrl = await this.page.url();
        expect(pageUrl).toContain(title);
    }
}