import { Page, expect, Locator } from '@playwright/test';

export class formPage {
    private readonly page: Page;

    private readonly englishBtn: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly phoneInput: Locator;
    private readonly companyNameInput: Locator;
    private readonly jobTitleSelect: Locator;
    private readonly companyIndustrySelect: Locator;
    private readonly companySizeSelect: Locator;
    private readonly submitBtn: Locator;
    private readonly successMessage: Locator;
    private readonly acceptCookiesBtn: Locator;
    private readonly agreeCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;

        this.englishBtn = page.getByRole('link', { name: /english/i });
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.getByPlaceholder(/mobile number/i);
        this.companyNameInput = page.locator('#company');
        this.jobTitleSelect = page.locator('select[name="job"]');
        this.companyIndustrySelect = page.locator('select[name="industry"]');
        this.companySizeSelect = page.locator('select[name="size"]');
        this.agreeCheckbox = page.locator('#agree');
        this.submitBtn = page.getByRole('button', { name: 'Next' });
        this.successMessage = page.getByText(/thank you/i);
        this.acceptCookiesBtn = page.getByRole('button', { name: /accept/i });
        //this.rejectCookiesBtn = page.getByRole('button', { name: /reject/i });
    }

    async openPage() {
        await this.page.goto('https://www.sifi.app/en/get-started');
        await this.handleCookiesPopup();
    }


    async switchToEnglishIfVisible() {
        if (await this.englishBtn.isVisible()) await this.englishBtn.click();
    }

    async handleCookiesPopup() {
        try {
            if (await this.acceptCookiesBtn.isVisible({ timeout: 5000 })) {
                await this.acceptCookiesBtn.click();
            }
        } catch {
        }
    }


    async enterFirstName(firstName: string) { await this.firstNameInput.fill(firstName); }
    async enterLastName(lastName: string) { await this.lastNameInput.fill(lastName); }
    async enterEmail(email: string) { await this.emailInput.fill(email); }

    async enterPhone(phone: string) {
        // Clear any existing value first
        await this.phoneInput.fill('');
        await this.phoneInput.fill(phone);
    }
    async enterCompanyName(company: string) { await this.companyNameInput.fill(company); }

    async selectJobTitle(jobTitle: string) {
        await this.jobTitleSelect.selectOption({ label: jobTitle });
    }

    async selectCompanyIndustry(industry: string) {
        await this.companyIndustrySelect.selectOption({ label: industry });
    }

    async selectCompanySize(size: string) {
        await this.companySizeSelect.selectOption({ label: size });
    }

    async checkAgreeCheckbox() {
        await this.agreeCheckbox.check();
    }

    async clickSubmit() { await this.submitBtn.click(); }
    async verifySubmission() { await expect(this.successMessage).toBeVisible(); }

    async fillAndSubmitForm(formData: {
        user: {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            companyName: string;
        };
        options: {
            jobTitle: string;
            companyIndustry: string;
            companySize: string;
        };
    }) {
        const { user, options } = formData;

        await this.enterFirstName(user.firstName);
        await this.enterLastName(user.lastName);
        await this.enterEmail(user.email);
        await this.enterPhone(user.phone);
        await this.enterCompanyName(user.companyName);

        await this.selectJobTitle(options.jobTitle);
        await this.selectCompanyIndustry(options.companyIndustry);
        await this.selectCompanySize(options.companySize);

        await this.checkAgreeCheckbox();
        await this.clickSubmit();
    }

}
