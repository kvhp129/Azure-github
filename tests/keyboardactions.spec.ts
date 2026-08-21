import {test,expect} from "@playwright/test"
test("Handling keyoard actions:", async({page})=>{

 // Navigate to the application
 await page.goto("https://testautomationpractice.blogspot.com/")

 // Locate the input1 textbox
 const input1=page.locator("#input1")

 // Focus the input1
 await input1.focus()
 //await input1.click() 

 // Enter text into the input1
 await page.keyboard.insertText("prasad")

 // select the text entered into the input1
 await page.keyboard.press("Control+A")

 // Copy the text in the input1
 await page.keyboard.press("Control+C")

 
 // Enter Tab 2 times navigating to the input2
 await page.keyboard.press("Tab")
 await page.keyboard.press("Tab")

 // paste the copy text into the input2
 await page.keyboard.press("Control+V")

 //Enter Tab 2 times navigating to the input3
 await page.keyboard.press("Tab")
 await page.keyboard.press("Tab")

// paste the copy text into the input3
 await page.keyboard.press("Control+V")


})