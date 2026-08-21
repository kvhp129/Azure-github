import { test,expect } from "@playwright/test"
test("Verify the Chrome CPU value in the dynamic table", async ({page})=>{

 // Navigate to the application
 await page.goto("https://practice.expandtesting.com/dynamic-table")

 // Locate all table rows
 const allRows=page.locator(".table.table-striped tbody tr")

 // Verify that table is Visible
 //await expect(allRows).toBeVisible()
 
 // Count the number of rows in the table
 const count=await allRows.count() 
 console.log("rows count:",count)

 // Verify that the table displays exactly 4 rows
 expect(count).toBe(4)

 // Find the chrome
 let cpuLoad=''
 for(let i=0;i<count;i++)
 {
    const columnText=await allRows.nth(i).locator('td').nth(0).innerText()
    if(columnText==='Chrome')
    {
       cpuLoad=await allRows.nth(i).locator("td",{hasText:'%'}).innerText()  
       console.log("CPU Load of Chrome ....",cpuLoad)
       break;
    }
 }




// Compare it with the value in the yellow label
const yellowBoxText=await page.locator("#chrome-cpu").innerText()
console.log("Yellow box text...",yellowBoxText)
if(yellowBoxText.includes(cpuLoad))
{
    console.log('Cpu load of the chrome is equal')
}
else{
     console.log('Cpu load of the chrome is not equal')
}
      //     OR 
   // Verify that the Chrome CPU load matches the yellow box text
expect(yellowBoxText).toContain(cpuLoad);

console.log("Chrome CPU load matches the yellow box text.");
     

})