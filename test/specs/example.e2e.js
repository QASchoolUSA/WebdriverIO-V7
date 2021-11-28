describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.google.com/');

        await $('//input[@name="q"]').setValue('SDET');
        await browser.keys('Enter');

        await expect(browser).toHaveTitle('SDET - Google Search');

        const results = await $$('.g .tF2Cxc .yuRUbf a');
        const hrefs = [];
        
        for(let i = 0; i < results.length; i++) {
            hrefs.push(results[i].getAttribute('href'));
            browser.pause(3000);
            browser.url(hrefs[i]);
        }
        
    });
});
