import {test,expect} from "@playwright/test"
import fs from 'fs'

test("single file upload", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#singleFileInput").setInputFiles('uploads/pds.pdf')

    await page.locator("button:has-text('Upload Single File')").click()
    
   const msgStatus=await page.locator("#singleFileStatus").innerText()

   expect(msgStatus).toContain("pds.pdf")
   console.log("File upload successfully....")
})


test(" Generate a PDF file and download it to the specified location ",async ({page})=>{

 // Navigate to the application
 await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

 // Locate the input field
 const inputBox=page.locator("#inputText")

 // Enter the text
 await inputBox.fill("Korrapti venkata hari prasad")

 // Generate the PDF file
 await page.locator("#generatePdf").click()

 // Click the download file button and wait for the download event simultaneously
 const [download]=await Promise.all([page.waitForEvent('download'),page.locator("#pdfDownloadLink").click()])

 // Save the downloaded file to the downloads folder
 const dowmloadPath='downloads/myname.pdf'
 await download.saveAs(dowmloadPath)

 // Verify that the downloaded file exist
const fileExists= fs.existsSync(dowmloadPath)
expect(fileExists).toBeTruthy()



})

