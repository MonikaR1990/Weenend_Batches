import {test} from '@playwright/test'

test('Interactions', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    // //Fill()
    // //await page.locator('#name').fill("Bala")
    // await page.fill('#email', "bala@gmail.com")

    // //Type()
    // await page.locator('#phone').type("6876876878")

    // //Type Slowly
    // await page.locator('#textarea').pressSequentially('Trichy-620001')

    // //click() (radio, link, button)
    // //await page.getByRole('radio', {name: 'male'}).click()
    // await page.click('#male')

    // //clear()
    // await page.locator('#phone').clear()

    // //check()
    // await page.locator('#sunday').check()
    // await page.check('#sunday')

    // //uncheck()
    // await page.locator('#sunday').uncheck()
    // await page.uncheck('#sunday')

    // //dblclick() - Double Click
    // await page.getByText('Copy Text').dblclick()

    await page.getByText('Copy Text').click({clickCount:3}) //Multiple Click
    await page.getByText('Copy Text').click({force: true})
   
    // //Right Click
    // await page.locator('.start').click({button: 'right'})

    // //hover()
    // await page.getByText('Point Me').hover()

    // //press() --> Press Key
    // await page.locator('#Wikipedia1_wikipedia-search-input').fill("Java")
    // await page.locator('#Wikipedia1_wikipedia-search-input').press('Enter')
  
    //Keyboard Shortcut
    await page.locator('#textarea').fill("Trichy-620001")
    // await page.keyboard.press("Control+A")
    // await page.keyboard.press("Control+C")
    
    // await page.locator('#phone').focus()
    // await page.keyboard.press("Control+V")

    await page.locator('#textarea').selectText(); 

    //Drag and Drop
    await page.dragAndDrop('#draggable', '#droppable')

    //Select (Drop Down)
    //1. Visible Text
    await page.locator('#country').selectOption({label:'Germany'})

    //2. Value
    //await page.locator('#country').selectOption('australia')
    await page.selectOption('#country', 'australia')

    //3. Index
    await page.locator('#country').selectOption({index: 0})

    //4. Multiiple Select
    await page.locator('#colors').selectOption(['red', 'green', 'yellow'])

    //File Upload
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt')

    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data1.txt', 'E:\\Data.docx'])

    //Scroll
    //await page.getByText('Upload Multiple Files').scrollIntoViewIfNeeded()

    //Mouse Scroll
    await page.mouse.wheel(0, 1000) //Scroll Down

    await page.mouse.wheel(0, -500)  //Scroll Up

    await page.mouse.wheel(500, 0)  //Scroll Right

    await page.mouse.wheel(-500, 0) //Scroll Left


    await page.waitForTimeout(5000)



})