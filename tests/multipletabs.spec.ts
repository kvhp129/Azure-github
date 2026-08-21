import { test,expect,chromium,Page } from "@playwright/test"

test("Handle multiple tabs ", async ()=>{

  // Launch the browser
const browser=await chromium.launch({headless:false})
  // Create a browser context
const context=await browser.newContext()
  // Open the Parent page
const parentPage=await context.newPage()

 // Navigate to the application
  await parentPage.goto("https://testautomationpractice.blogspot.com/")


 // Click the button and wait for the child page to open simultaneously
 const [childPage]=await Promise.all([context.waitForEvent('page'),parentPage.locator("button[onclick='myFunction()']").click()])

 // Wait for the child page to load completely
 await childPage.waitForLoadState() 

 // Count the number of pages 
 const pages:Page[]= context.pages()
 console.log("Number of pages:",pages.length)

 // Verify that the browser context contains two pages
 expect(pages.length).toBe(2);

 // Retrieve the title of both pages
 const parentPageTitle=await parentPage.title()
 const childPageTitle=await childPage.title()

 console.log('Parent page title....',parentPageTitle)
 console.log("Child page title....",childPageTitle)

 // Verify the url's of both pages
  expect( parentPage.url()).toBe('https://testautomationpractice.blogspot.com/')
  expect (childPage.url()).toBe("https://www.pavantestingtools.com/")

  // Close the browser
  await browser.close()




})