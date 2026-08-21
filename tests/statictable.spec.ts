/* import {test,expect,Locator} from "@playwright/test"
test("Static table Demo:", async ({page})=>{
 // Navigate to the application
 await page.goto("https://testautomationpractice.blogspot.com/")

 // Capture the whole table
 const staticTable=page.locator("table[name='BookTable'] tbody")
 
 // Verify that table is visible
 await expect(staticTable).toBeVisible()

 // Count the number of rows
 const rows=staticTable.locator("tr")
 const rowsCount= await rows.count()
 console.log("Number of rows:",rowsCount)

 // Verify the that number of rows
 await expect(rows).toHaveCount(7)   // approach 1 is preferred
 //expect(rowsCount).toBe(7)           // approach 2

 // Count the number of columns
 const columns=rows.locator("th")
 const columnsCount=await columns.count()
 console.log("Number of total columns:",columnsCount)

 // Verify that columns count
 await expect(columns).toHaveCount(4)
 expect(columnsCount).toBe(4)

 // Read all data from second row
 const secondRowCells=rows.nth(1).locator("td") 
 const secondRowText:string[]=await secondRowCells.allInnerTexts()
 console.log("all text from second row:",secondRowText)
 await expect(secondRowCells).toHaveText([ 'Learn Selenium', 'Amit', 'Selenium', '300' ])

 console.log(" printing the second row data.....")
 for(let text of secondRowText)
 {
    console.log(text)
 }

 // Read all data from the table
 const allRowsData:Locator[]=await rows.all()  //all reurns Locator to Locator in the array form
 console.log(" Printing all  Table data.......")
 for(const rowData of allRowsData.slice(1))
 {
    const tableData=await rowData.locator('td').allInnerTexts()
    console.log(tableData.join('\t'))
 }

 // Print the book names where the Author is Mukesh
 const mukeshBooks:string[]=[]
 for(const rowData of allRowsData.slice(1) )
 {
    const columnData=await rowData.locator('td').allInnerTexts() 
    const Author=columnData[1]   
    const bookName=columnData[0]
     if(Author==='Mukesh')
     {
        console.log(` ${Author} \t ${bookName}`)
        mukeshBooks.push(bookName)

     }


 }
 expect(mukeshBooks).toHaveLength(2)
  
 // calculate teh total price of books
 let totalPrice=0;
 for(const rowData of allRowsData.slice(1) )
 {
    const columnData=await rowData.locator('td').allInnerTexts() 
    const price=columnData[3];
    totalPrice=totalPrice+parseInt(price)

 }
console.log("total books price:",totalPrice)
expect(totalPrice).toBe(7100)
}) */



   




