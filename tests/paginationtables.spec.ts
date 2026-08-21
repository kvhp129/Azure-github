import { test, expect } from "@playwright/test"
test("Read all data from all pages in the table", async ({page})=>{

 // Navigate to the application
 await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")

 

  let hasMorePages=true
  let matchFound=false;
 while(hasMorePages)
 {
    // Locate all currently diaplyed rows in the table
    const allRows=page.locator("#example tbody tr")

    // Count the number of displayed rows
    const count=await allRows.count()
    console.log("Number of rows displayed",count)

    // Verify that the table contains at least one row
    expect(count).toBeGreaterThan(0)

    // Read and print all displayed rows
    for(let i=0;i<count;i++)
    {
        //const text=(await allRows.nth(i).innerText())
        //console.log(text)
        const text=await allRows.nth(i).locator("td").allInnerTexts()
        console.log(text.join('\t'))
        const employeeName=text[0]
        const officeName=text[2]
        if(employeeName==='Shou Itou')
        {
            console.log(officeName)
            matchFound=true;
            break;
            
        }

    }

    // Stop pagination if the employee is found
    if(matchFound)
    {
        break;
    }

    // Locate the next button
    const nextButton=page.locator("button[aria-label='Next']")

    // Verify whether the next button is disabled
    const isDisabled=await nextButton.getAttribute('class')
    if(isDisabled?.includes('disabled '))
    {
        hasMorePages=false;
        break;
    }
    else{
        await nextButton.click()
    }

    
 }
 

})

/* import { test,expect } from "@playwright/test"
test("Filter table rows and verify the displayed row count", async({page})=>{

 // Navigate to the application
 await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")

 // Select '25' from the page length dropdown
  const dropDownOptions=await page.locator("#dt-length-0").selectOption({value:'25'})
  
 // Locate all displayed table rows
 const allRows=page.locator("#example tbody tr")

 // Count the displayed rows
 const rowsCount=await allRows.count()

 // Verify that at least one row is displayed
 expect(rowsCount).toBeGreaterThan(0)
 console.log("all available rows count:",rowsCount)

 // Verify that exactly 25 rows are displayed
 await expect(allRows).toHaveCount(25)

})
 */



/* import { test,expect } from "@playwright/test"
test("Search for specific data in the table", async ({page})=>{

   // Navigate to the application
   await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")

   // Search for a specific employee
   await page.locator("#dt-search-0").fill("Sonya Frost")

   // Locate all displayed table row
   const allRows=page.locator("#example tbody tr")

   // Count the displayed rows
   const count=await allRows.count()
   
   // Verify that at least one row is displayed
   expect(await allRows.count()).toBeGreaterThan(0)

   // Verify that the searched employee exists
   let matchFound=false;
   for(let i=0;i<count;i++)
   {
      let columnText=await allRows.nth(i).locator("td").nth(0).innerText()
      if(columnText==='Sonya Frost')
      {
         matchFound=true;
         console.log("Search data is exist")
         break;

      }
      
   }

  // Verify that the searched employee was found 
  expect(matchFound).toBeTruthy()


})
 */
