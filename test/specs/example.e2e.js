describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.google.com/');

        await $('//input[@name="q"]').setValue('SDET');
        await browser.keys('Enter');

        await expect(browser).toHaveTitle('SDET - Google Search');
        
    });
});
