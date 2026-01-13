import { Page, expect, Locator } from '@playwright/test';

export class optionsPage {
  private readonly page: Page;
  private readonly titleHeading: Locator;
  private readonly fastTrackOption: Locator;
  private readonly requestPhoneCallOption: Locator;
  constructor(page: Page) {
    this.page = page;
    this.titleHeading = page.getByRole('heading', { name: 'Select an option' });
    this.fastTrackOption = page.getByRole('link', { name: 'Fast-track your onboarding' });
    this.requestPhoneCallOption = page.getByRole('link', { name: 'Request a phone call' });
  }

  async assertTitleIsVisible() {
    await expect(this.titleHeading).toBeVisible();
  }

  async clickFastTrackOption() {
    await this.fastTrackOption.click();
  }

  async clickRequestPhoneCallOption() {
    await this.requestPhoneCallOption.click();
  }

}