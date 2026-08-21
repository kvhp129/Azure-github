import {test,expect} from "@playwright/test"
import fs from "fs"

test("Generate text file and download it to the specified location", async ({page})=>{

  // Navigate to the application
  await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
  
  // Locate the input field
  const inputBox=page.locator("#inputText")

  // Verify that the inputbox is visible
  await expect(inputBox).toBeVisible()

  // Enter the text
  await inputBox.fill("Csk team playing 11: Rutu (c),Brevis")

  // Generate the text file
  await page.locator("#generateTxt").click()

  // Click the download button and wait for download event simultaneously
  const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#txtDownloadLink').click()])

  // Save the download file to the download folder
  const downloadPath='downloads/cskfile.txt'
  await download.saveAs(downloadPath)

  // Verify that the file exist 
 const fileExists=fs.existsSync(downloadPath)
 
expect(fileExists).toBeTruthy()





})




