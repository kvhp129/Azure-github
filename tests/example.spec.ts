/* import { test, expect,chromium,Page } from '@playwright/test'
test("Handle Multiple tabs:", async ()=>{
  // Launch the chrome browser
   const browser=await chromium.launch()

   // Craete a browser context
   const context=await browser.newContext()

   // Create a Parent pages
   const parentPage=await context.newPage()

  // Navigate to the application
  await parentPage.goto("https://testautomationpractice.blogspot.com/")

  // Click the new tab button and wait for new childpage event simultaneously
  const [childPage]=await Promise.all([context.waitForEvent("page"),parentPage.locator("button[onclick='myFunction()']").click()])

    // Count the number of open pages
    const pagesCount:Page[]= context.pages()
    console.log("Number of pages available:",pagesCount.length)
    expect(pagesCount.length).toBe(2)

   // verify the title of both parentpage and childpage
   const parentPageTitle=await parentPage.title()
   console.log("Parent page title:",parentPageTitle)
   const childPageTitle=await childPage.title()
   console.log("Child page title:",childPageTitle)

   // verify that title of both parent and child pages
   expect(parentPageTitle).toContain("Automation Testing Practice")
   expect(childPageTitle).toContain("SDET-QA Blog")

   // or 
   await expect(parentPage).toHaveTitle("Automation Testing Practice")
   await expect(childPage).toHaveTitle("SDET-QA Blog")

    // close the browser
    await browser.close()

}) */


/* import { test,expect} from "@playwright/test"
test("Handle iframes", async({page})=>{

 // step1: Navigate to the appliacation
  await page.goto("https://ui.vision/demo/webtest/frames/")

  // verify the demo page is loaded
  await expect(page).toHaveURL(/frames/)

  // switch to frame1
  const Frame1=page.frameLocator("frame[src='frame_1.html']")

  // Locate the textBox inside the frame1
  const frame1InputBox=Frame1.locator("input[type='text']")

  // Verify the textBox is visible
  await expect(frame1InputBox).toBeVisible()

  // Enter the text
  await frame1InputBox.fill("Playwright Automation")

  // verify the entered value
  await expect(frame1InputBox).toHaveValue("Playwright Automation")


}) */    

  //  a) Switch to Frame 3.
//  b) Locate the textbox inside Frame 3 and verify that it is visible.
//  c) Enter the text "Automation Testing" into the textbox and
//      verify that the entered text is displayed successfully.
//  d) Locate the nested Google Form iframe inside Frame 3.
//  e) Switch to the nested Google Form iframe.
//  f) Select the radio button "I am a human" (or any available option) and
//       verify that it is selected.
//  g) Select one checkbox from the Google Form and 
//      verify that it is selected.
//  h) Return to Frame 3.
//  i) Return to the main page.


import { test,expect } from "@playwright/test"
test("Verify the Nested iframe:", async ({page})=>{

   // Navigate to the application
   await page.goto('https://ui.vision/demo/webtest/frames/')

   // verify the Frame demo page is loaded successfully
   await expect(page).toHaveURL(/frames/)

   // switch to frame3
   const Frame3=page.frameLocator("frame[src='frame_3.html']")

   // Locate the textBox inside the iframe3
   const frame3TextBox=Frame3.locator("input[name='mytext3']")

   // Verify the textbox is Visible
   await expect(frame3TextBox).toBeVisible()

   // Enter the text Automation Testing
   await frame3TextBox.fill("Automation Testing")

   // verify that entered the value
   await expect(frame3TextBox).toHaveValue("Automation Testing")

   // Locate the nested Google Form iframe inside Frame 3.
   const googleFormFrame=Frame3.frameLocator("iframe")
   // select the radio button
   const radioButton=googleFormFrame.getByText("I am a human")
   //Verfy the Radio Button is visible
   await expect(radioButton).toBeVisible()

   // Click the radioButton
   await radioButton.click()

   // verify the radioButton is selcted
   //await expect(radioButton).toBeChecked()

  // select the checkBox
  const checkBox=googleFormFrame.getByText("General Web Automation")

  // Verify the checkBox is visible
  await expect(checkBox).toBeVisible()

  // Selct the checkbox
  await checkBox.click()

  // verify the checkBox is selected
  //await expect(checkBox).toBeChecked()


})

















