import {test} from '@playwright/test'

test('Download', async({page})=>{
    await page.goto("https://letcode.in/file")

    //Start wait for the download event
    const downlodPromise = page.waitForEvent('download') //listening

    //click download button
    await page.locator('#xls').click()

    //Capture the File
    const downloadFile = await downlodPromise

    //Save the File
    await downloadFile.saveAs(`downloadedFile/` + downloadFile.suggestedFilename())

    const downloadPath = await downloadFile.path()
    console.log(downloadPath)

})