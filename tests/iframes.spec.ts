// Iframes
/* import {test,expect,Frame} from "@playwright/test"
test("Handle iframe ", async({page})=>{
 //Navigate to the application  
await page.goto("https://ui.vision/demo/webtest/frames/")

//Locate the frame2 
const frame3:Frame |null=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2"})
if(frame3)
{
frame3.locator("input[type='text']").fill("Hello")
}
else{
   console.log("Frame3 is not available")
}

//Locate the frame3
//const InputBox=page.frameLocator("[src='frame_3.html']").locator("input[name='mytext3']")
//await InputBox.fill("Hello welcome")

//locate the frame3 using page.frame()
const Frame3:Frame|null=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'})
if(Frame3)
{
   Frame3.locator("input[name='mytext3']").fill("Welcome")

   //get the child frame inside the iframe3
   const childframes=Frame3.childFrames()
   console.log("No of the childframes:",childframes.length)

   // locate the radio utton inside the childframe[0]
   const Radioutton=childframes[0].getByLabel("I am a human")
   Radioutton.check()

   //validate the radio button is selected
   await expect(Radioutton).toBeChecked()
}
else{
   console.log("Frame3 is not available")
}

}) */


/*import {test, expect, Frame } from "@playwright/test"
test("Handle Nested Frame:", async ({page})=>{

 // Navigate to the application
 await page.goto("https://ui.vision/demo/webtest/frames/")

 //Locate the frame3 using page.frame()
 const Frame3:Frame | null=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"})
if(Frame3)
{
   const Inputbox=Frame3.locator("input[name='mytext3']")

   //Fill the textbox inside the Frame3
   await Inputbox.fill("welcome ")

   //Get the childframe inside the Frame3
   const childframes:Frame[]=Frame3.childFrames()
   console.log("No of child frames inside the frame3:",childframes.length)

   //Locate the radio button in the childframe
   const RadioButton=childframes[0].getByLabel("I am a human")
   //select the Radio button
   await RadioButton.check()
   // Validate the radio button is selected

   await expect(RadioButton).toBeChecked()

}
else{
   console.log("Frame3 ia not available")
}

}) */

//  test1:Step 1:
//  a) Navigate to the application and verify that the Frames Demo page
// loads successfully.
//  b) Switch to Frame 1.
//  c) Locate the textbox and verify that it is visible.
//  d) Enter the text "Playwright Automation" into the textbox and 
//   verify that the textbox displays the entered value successfully.
 
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

//  test 2:

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


