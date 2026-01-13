import { Page } from '@playwright/test';
import { formPage } from './formPage';
import { optionsPage } from './optionsPage';
import { bookDemo } from './bookDemo';

export class POManager {
    readonly page: Page;
    readonly formPage: formPage;
    readonly optionsPage: optionsPage;
    readonly bookDemo: bookDemo;

    constructor(page: Page) {
        this.page = page;
        this.formPage = new formPage(page);
        this.optionsPage = new optionsPage(page);
        this.bookDemo = new bookDemo(page);
    }
}
