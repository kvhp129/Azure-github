import { test,expect} from "@playwright/test"

test("Handle JavaScript alert dialog",async({page})=>{

  // Navigate to the application
  await page.goto("https://testautomationpractice.blogspot.com/")

  // Register Dialog handler
  page.on('dialog', async (dialog)=>{

    // Capture the dialog type and message
    const dialogType=dialog.type()
    const dialogMessage=dialog.message()
    console.log("Dialog type:",dialogType)
    console.log("Dilaog mesage",dialogMessage)

    // Accept the dialoge
    await dialog.accept()

    // Verify that the dialog type and message

    expect(dialogType).toBe(alert)
    expect(dialogMessage).toContain("I am an alert box!")

    // Click the Alert button
    await page.locator("#alertBtn").click()

  })





})




