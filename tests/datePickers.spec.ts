/* import { test,expect,Locator} from "@playwright/test"
test("JQUERY date picker", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

// Locate the date picker input
const dateInputBox=page.locator("#datepicker")
await expect(dateInputBox).toBeVisible()

// fill the date picker input using fill() method
//dateInputBox.fill("08/02/2026")  //mm/dd/yyyy
//await expect(dateInputBox).toHaveValue("08/02/2026")

// using  date picker
const targetYear='2027'
const targetMonth='August'
const targetDate='20'
// click the date Input box to open the calender
await dateInputBox.click()
while(true)
{
    const currentMonth=await page.locator(".ui-datepicker-month").innerText()
    const currentYear=await page.locator(".ui-datepicker-year").innerText()

    if(currentMonth===targetMonth && currentYear===targetYear)
    {
       break;
    }
    await page.locator("a[title='Next']").click()

}

 // Locate all dates present in the calender
  
const dates=await page.locator(".ui-datepicker-calendar td").all()
for(let date of dates)
{
    const dateText=await date.innerText()
    if(dateText===targetDate)
    {
        await date.click()
    }
}
}) */


/* import{ test, expect, Locator} from "@playwright/test"
test("Booking.com Date picker Test - Check in and Check out :", async ({page})=>{

  // Navigate to the application
  await page.goto("https://www.booking.com/")

  // Click on the date picker field to open the calender
  await page.locator("button[data-testid='searchbox-dates-container']").click()

  //..... Check in date selection.....
  let checkInYear='2027'
  let checkInMonth='January'
  let checkInDate='20'

  // Navigate through the calender to the desired check in month and year
  while(true)
  {
   const checkInMonthYear=await page.locator("h3[id^='bui-calendar-month']").first().innerText()
   const currentMonth=checkInMonthYear.split(" ")[0]
   const currentYear=checkInMonthYear.split(" ")[1]
   if(checkInMonth===currentMonth && checkInYear===currentYear)
   {
    break;
   }
   else{
     await page.locator("button[aria-label='Next month']").click()
   }
  }

 // Locate all available dates in the current month
const allDates=await  page.locator("table.b8fcb0c66a").nth(0).locator("td").all()

let matchFound=false;
for(let date of allDates)
{
    const dateText=await date.innerText()
 if(dateText===checkInDate)
 {
    matchFound=true;
    await date.click()
    break;
 }
}
expect(matchFound).toBeTruthy()

}) */



/* import { test, expect } from "@playwright/test";

test("Select a journey date for ticket booking in the RedBus application", async ({ page }) => {

    // Navigate to the application
    await page.goto("https://www.redbus.in/");

    // Open the journey date calendar
    await page.locator("div[aria-label='Select date of journey']").click();

    // Define the target journey date
    const targetYear = "2027";
    const targetMonth = "September";
    const targetDate = "10";

    // Navigate to the target month and year
    while (true) {

        const currentMonthYear = await page.locator(".monthYear___a77d7b").innerText();
        const currentMonth = currentMonthYear.split(" ")[0];
        const currentYear = currentMonthYear.split(" ")[1];

        if (currentMonth === targetMonth && currentYear === targetYear) {
            break;
        } else {
            // Navigate to the next month
            await page.locator("i[aria-label^='Next']").click();
        }
    }

    // Locate all dates in the current month
    const allDates = page.locator("ul div li");
    const count = await allDates.count();

    let matchFound = false;

    for (let i = 0; i < count; i++) {

        const dateText = (await allDates.nth(i).innerText()).trim();

        if (dateText === targetDate) {
            await allDates.nth(i).click();
            matchFound = true;
            break;
        }
    }

    // Verify that the target date was found
    expect(matchFound).toBeTruthy();

}); */

