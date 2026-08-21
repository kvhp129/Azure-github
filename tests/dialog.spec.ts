import { test, expect } from "@playwright/test";

test("Handle a JavaScript alert dialog", async ({ page }) => {

    // Navigate to the application
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Register the dialog event
    page.on("dialog", async (dialog) => {

        // Capture the dialog details
        const dialogType = dialog.type();
        const dialogMessage = dialog.message();

        console.log("Dialog Type:", dialogType);
        console.log("Dialog Message:", dialogMessage);

        // Verify the dialog type
        expect(dialogType).toBe("alert");

        // Verify the dialog message
        expect(dialogMessage).toContain("I am an alert box!");

        // Accept the dialog
        await dialog.accept();

    });

    // Click the Alert button
    await page.locator("#alertBtn").click();

});

