import {test} from '@playwright/test'

test('Xpath', async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator("//textarea[@name='q']").fill("Selenium")
    await page.locator("//input[contains(@value,'Search')]").first().click()
})


//1. Single Attribute based ==> //textarea[@name='q']
//2. Multiple attributes ==> //textarea[@name='q'][@aria-label='Search'] 
//3. and, or operator ==> //textarea[@name='q' and @aria-label='Search'] || //textarea[@name='q' or @aria-label='Search']
//4. contains ==> //input[contains(@value,'Search')]
//5. startswith ==> //input[starts-with(@value,'Google')]
//6. endswith ==> Xpath no endswith
//7. Visible Text ==> //a[text()='Business']
//8. Visible Text Contains ==> //a[contains(text(),'works')]
//9. Visible Starts with Contains ==> //a[starts-with(text(),' How')]
//10. Find Parent using Child ==> //option[text()='Baby']/parent::select
//12. Find Child using Parent ==> //select/child::option
//13. Find Ancestor using Grand Child ==> //select/ancestor::form
//14. Find Grand Child (Descendant) using Ancestor ==> //form/descendant::select
//15. Find following all family Elements ==> //label/following::input
//16. Find following own sibling element ==> //label/following-sibling::input
//17. Find preceding all family Elements ==> //input[@id='twotabsearchtextbox']/preceding::label
//18. Find preceding own sibling element ==> //input[@id='twotabsearchtextbox']/preceding-sibling::label
