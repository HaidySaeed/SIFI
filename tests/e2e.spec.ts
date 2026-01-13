import { test } from '@playwright/test';
import { formData } from '../utlis/testData';
import { POManager } from '../pages/POManager';
test('Sifi Get Started form submission with fixed dropdown option names', async ({ page }) => {
    const pom = new POManager(page);

    await pom.formPage.openPage();
    await pom.formPage.switchToEnglishIfVisible();
    await pom.formPage.fillAndSubmitForm(formData);

    await pom.optionsPage.assertTitleIsVisible();
    await pom.optionsPage.clickFastTrackOption();

    await pom.bookDemo.assertTitleIsVisible();
    await pom.bookDemo.selectDemoOption();
    await pom.bookDemo.assertTitleIsVisible2();
    await pom.bookDemo.clickBookDemo();
});


