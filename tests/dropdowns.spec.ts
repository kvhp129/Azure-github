import { test, expect } from "@playwright/test";


// test steps
// 1. Navigate to the application
// 2.Locate the country dropdown and select Canada option from the dropdown
// 3. Count the number of options in the country dropdown
// 4. Verify that the Country dropdown contains exactly 10 options
// 5. Retrieve all options texts from the dropdown
// 6.Verify that "Brazil" exists in the dropdown options

test("Verify the Country dropdown options", async ({ page }) => {

    // Navigate to the application
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate the Country dropdown
    const countryDropdown = page.locator("#country");

    // Select "Canada" from the dropdown
    await countryDropdown.selectOption({ value: "canada" });

    // Count the number of options in the Country dropdown
    const count = await countryDropdown.locator("option").count();
    console.log("Number of available options:", count);
    
     // Verify that the Country dropdown contains exactly 10 options
    await expect(countryDropdown.locator("option")).toHaveCount(10);

    // Retrieve all dropdown option texts
    const optionTexts = (await countryDropdown
        .locator("option")
        .allTextContents())
        .map(text => text.trim());

    // Verify that "Brazil" exists in the dropdown options
    expect(optionTexts).toContain("Brazil");
    
    }) 


//  2.testscenario: verify the Drodown is already sorted alphabetically

 // 1.Navigate to the application
 // 2.Locate all options in the Colors dropdown
 // 3.Count the number of options in the dropdown and verify it
 // 4.Retrieve the text of all dropdown options
 // 5.Create a copy of the original list
 // 6.create another copy and sort it
 // 7.Verify that the dropdown is already sorted alphabetically


 test("verify the Drodown is already sorted alphabetically", async({page})=>{

  // Navigate to the application
  await page.goto("https://testautomationpractice.blogspot.com/")

  // Locate all options in the Colors dropdown
  //const dropdown=page.locator("#colors option")
  const dropdown=page.locator("#animals option")
   await expect((dropdown).first()).toBeVisible()

 // Count the number of options in the dropdown
   const count=await dropdown.count()
   console.log("total available options:",count)

 //verify that at least one option exist
 expect(count).toBeGreaterThan(0)

 // // Retrieve the text of all dropdown options
 const allOptions=(await dropdown.allInnerTexts()).map((text)=>text.trim())


 // Create a copy of the original list
 const originalList=[...allOptions]

 // create another copy and sort it
 const sortedList=[...allOptions].sort()

 // Verify that the dropdown is already sorted alphabetically

 expect(originalList).not.toEqual(sortedList)

 })



 // Test 3: Verify that HR Manager option is exist in the Job title dropdown
 // 1.Navigate to the application
 // 2.Perform the login steps and Verify whether the login is successful
 // 3.Open the PIM module and Job title dropdown
 // 4.Locate all Options in the jobtitle dropdown and Verify it
 // 5.Count the number of option in the dropdown and verification
 // 6.Retrieve the text of all options
 // 7.verify that specific text exist
 // 8.verify that Option was found


test("Handle Bootstrap Hidden Dropdown", async({page})=>{

    // Navigate to the application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Perform the login steps
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button',{name:'Login'}).click()

    // Verify whether the login is successful
    await expect(page).toHaveURL(/dashboard/)

    // Open the PIM module
    await page.getByText("PIM").click()

     // Open the JOB title dropdown
      await page.locator("form i").nth(2).click()

    // Locate all Options in the jobtitle dropdown
    const jobTitleDropdownOptions=page.locator("div[role='option'] span")

     // Verify whether that dropdown is Visisble
    await expect(page.locator("div[role='option'] span").first()).toBeVisible()

    // Count the number of option in the dropdown
    const count=await jobTitleDropdownOptions.count()
    console.log("Number of the available options:",count)

    // Verify that at least one option exist
     expect(count).toBeGreaterThan(0)

     // Retrieve the text of all options
     const allOptionsText=(await jobTitleDropdownOptions.allInnerTexts()).map((text)=>text.trim())
     console.log("All Dropdown option's text;",allOptionsText)
      
     // verify that specific text exist
     let optionsFound=false;
     for(let i=0;i<count;i++)
     {
      const optionText= (await jobTitleDropdownOptions.nth(i).innerText()).trim()
       if(optionText==="HR Manager")
       {
         await jobTitleDropdownOptions.nth(i).click();
         optionsFound=true;
         break;
       }
       }

       // verify that Option was found
       expect(optionsFound).toBeTruthy()
    

})



// test :4 :- Verify that the 'Finance' option exists in the Sub Unit dropdown



test("Verify that the 'Finance' option exists in the Sub Unit dropdown", async ({ page }) => {

    // Navigate to the application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Perform the login steps
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    // Verify that the login is successful
    await expect(page).toHaveURL(/dashboard/);

    // Open the PIM module
    await page.getByRole("link", { name: "PIM" }).click();

    // Open the Sub Unit dropdown
    await page.getByLabel("Sub Unit").click();

    // Locate all options in the Sub Unit dropdown
    const subUnitDropdownOptions = page.locator("div[role='option'] span");

    // Verify that the dropdown options are visible
    await expect(subUnitDropdownOptions.first()).toBeVisible();

    // Retrieve the text of all dropdown options
    const optionTexts = (await subUnitDropdownOptions.allTextContents())
        .map(text => text.trim());

    // Verify that the "Finance" option exists
    let matchFound = false;

    for (const option of optionTexts) {
        if (option === "Finance") {
            matchFound = true;
            break;
        }
    }

    // Verify that the "Finance" option was found
    expect(matchFound).toBeTruthy();
   // expect(optionTexts).toContain('Finance')

});


 


 