import { Page, expect, Locator } from '@playwright/test';

export class bookDemo {
    private readonly page: Page;
    private readonly titleLocator: Locator;
    private readonly demoOptionLocator: Locator;
    private readonly title: Locator;
    private readonly bookBTN: Locator;
    constructor(page: Page) {
        this.page = page;
        this.titleLocator = page.getByRole('heading', { name: 'Company details' });
        this.demoOptionLocator = page.locator('select');
        this.title = page.getByRole('heading', { name: 'Manual submission required' });
        this.bookBTN = page.getByRole('link', { name: 'Book a demo' });
    }

    async assertTitleIsVisible() {
        await expect(this.titleLocator).toBeVisible();
    }

    async selectDemoOption() {
        await this.demoOptionLocator.selectOption({ value: 'others' });
    }

    async assertTitleIsVisible2() {
        await expect(this.title).toBeVisible();
    }

    async clickBookDemo() {
        await this.bookBTN.click();
    }
}




