 import { test, expect,Locator} from "@playwright/test"
/*test("Handle InpuBox or TextBox", async ({page})=>{

// Navigate to the application
await page.goto("https://testautomationpractice.blogspot.com/")

// Locate Name input box
const nameInputBox=page.getByPlaceholder("Enter Name")
await nameInputBox.fill("prasad")

// Locate the Email InputBox
const emailInputBox=page.getByPlaceholder("Enter EMail")
await emailInputBox.fill("1234@gmail.com")

// Locate Phone textBox
const phoneTextBox=page.locator("#phone")
await phoneTextBox.fill("1234567897")


await page.waitForTimeout(3000)

})

 */
/* test("Radio button actions:", async ({page})=>{

  // Navigate to the application
  await page.goto("https://testautomationpractice.blogspot.com/")

  // Locate the Gender radio button
  const maleRadioButton=page.locator("#male")

  // verify that button is visible and enabled
  await expect(maleRadioButton).toBeVisible()
  await expect(maleRadioButton).toBeEnabled()

  // Verify that button is Unchecked first
   expect(await maleRadioButton.isChecked()).toBe(false)

   // Click that male radio button
   await maleRadioButton.check()

   // Verify that male radio button is checked
   expect(await maleRadioButton.isChecked()).toBe(true)

    //   Locate the female radio button
    const femaleRadioButton=page.locator("#female")
    
    // Verify that female radio button is visible and enabled
    await expect(femaleRadioButton).toBeVisible()
    await expect(femaleRadioButton).toBeEnabled()

    // Verify that female radio button is unchecked initially
    expect(await femaleRadioButton.isChecked()).toBe(false)

    // select the female radio button
    await femaleRadioButton.check()

    // Verify that female radio button is checked
    await expect (femaleRadioButton).toBeChecked()


}) */


/* test("Verify the check boxes:", async({page})=>{

 // Navigate to the application
 await page.goto("https://testautomationpractice.blogspot.com/")

 // select the sunday check box
 const sunDayCheckBox=page.locator("#sunday")
 await expect(sunDayCheckBox).toBeVisible()
 await sunDayCheckBox.check()

 // un select that sunday check box
 await sunDayCheckBox.uncheck()

 // select all check boxes and assert each it
 const allDaysCheckBoxes=["#sunday",'#monday','#tuesday','#wednesday','#thursday','#friday','#saturday']
const allCheckBoxLocator=allDaysCheckBoxes.map((index)=>page.locator(index)) 
/*  for(let checkBox of allCheckBoxLocator)
 {
    await checkBox.check()
    await expect(checkBox).toBeChecked()
 }


 //  unselect the last three check boxes
 for(let checkBox of allCheckBoxLocator.slice(-3))

 {
         await checkBox.uncheck()
         await expect(checkBox).not.toBeChecked()
 }


 // Toggle checkboxes: if checked, un check. if unchecked, check

  for(let checkBox of allCheckBoxLocator)
  {
    if(await checkBox.isChecked())   // true 
    {
      await checkBox.uncheck()
      await expect(checkBox).not.toBeChecked()
    }
    else{
        await checkBox.check()
        await expect(checkBox).toBeChecked()
    }
  } */
    

// select the randomly 1,3
/* const indexes=[1,3]
for(let i of indexes)
{
    await allCheckBoxLocator[i].check()
    await expect(allCheckBoxLocator[i]).toBeChecked()

} */

// select particualr checkbox using label from all checkboxes

 /*for(let checkBox of allCheckBoxLocator)
 {
    const checkBoxText=await checkBox.innerText()
    if(checkBoxText==='Wednesday')
    {
        await checkBox.check()
        await expect(checkBox).toBeChecked()
    }

 }

})
 */


/* test(" Verify the checkBox functionality:", async ({page})=>{

 // Navigate to the application
 await page.goto("https://testautomationpractice.blogspot.com/")

 // Locate the Sunday checkBox
 const sunDayCheckBox=page.locator("#sunday")

 // Verify that the Sunday Checkbox is visible
 await expect(sunDayCheckBox).toBeVisible()

 // Select the Sunday Checkbox
 await sunDayCheckBox.check()
 await expect(sunDayCheckBox).toBeChecked()

 // Uncheck the Sunday Checkbox
 await sunDayCheckBox.uncheck()
 await expect(sunDayCheckBox).not.toBeChecked()


 // Locate all day checkboxes
 const allDaysCheckBoxes:Locator[]=
 [
    page.locator("#sunday"),
    page.locator("#monday"),  
    page.locator("#tuesday"),
    page.locator("#wednesday"),
    page.locator("#thursday"),
    page.locator("#friday"),
    page.locator("#saturday")
 ]

 // Select all checkboxes and verify that each one is checked
 for(let checkBox of allDaysCheckBoxes)
 {
    await checkBox.check()
    await expect(checkBox).toBeChecked()
 }

 // Uncheck the last three checkboxes and verify they are unchecked
 for(let checkBox of allDaysCheckBoxes.slice(-3))
 {
    await checkBox.uncheck()
    await expect(checkBox).not.toBeChecked()
 }

 // Toggle all checkboxes
 // if unchecked, check it. if checked, uncheck it

 for(let checkBox of allDaysCheckBoxes)
 {
    if(await checkBox.isChecked())
    {
        await checkBox.uncheck()
        await expect(checkBox).not.toBeChecked()
    }
    else{
        await checkBox.check()
        await expect(checkBox).toBeChecked()
    }
 }

 // select checkboxes at specific indexes
 let indexes=[1,3]
 for(let i of indexes)
 {
    await allDaysCheckBoxes[i].check()
    await expect(allDaysCheckBoxes[i]).toBeChecked()
 }

 // select a specific checkbox using its label
 const checkboxarray=[
    {label:"Sunday", locator: page.locator("#sunday")},
    {label:"Monday", locator: page.locator("#monday")},
    {label:"Tuesday", locator: page.locator("#tuesday")},
    {label:"Wednesday", locator: page.locator("#wednesday")},
    {label:"Thursday", locator: page.locator("#thursday")},
    {label:"Friday", locator: page.locator("#friday")},
    {label:"Saturday", locator: page.locator("#saturday")}
 ]
const weekDay="Friday"
let matchFound=false;
for(let ch of checkboxarray)
{
    if(ch.label.toLowerCase()===weekDay.toLowerCase())
    {
        await ch.locator.check()
        matchFound=true
        await expect(ch.locator).toBeChecked()
        break;
    }
}
expect(matchFound).toBeTruthy()

}) */


test("verify the Checkbox Funtionality", async ({page})=>{

   // Navigate to the application
   await page.goto("https://testautomationpractice.blogspot.com/")

   // Locate the Sunday checkbox
   const sunDayCheckBox=page.locator("#sunday")
   await expect(sunDayCheckBox).toBeVisible()
   await sunDayCheckBox.check()
   
   // Verify that the Sunday checkbox is checked
   await expect(sunDayCheckBox).toBeChecked()

   // Uncheck the sunday checkbox
   await sunDayCheckBox.uncheck()
   await expect(sunDayCheckBox).not.toBeChecked()

   // Locate all day checkboxes
  const allDaysCheckBoxes=[
   page.locator("#sunday"),
   page.locator("#monday"),
   page.locator("#tuesday"),
   page.locator("#wednesday"),
   page.locator("#thursday"),
   page.locator("#friday"),
   page.locator("#saturday")

  ]

  // Select all checkboxes and check each one is checked
  /* for(let checkbox of allDaysCheckBoxes)
  {
   await checkbox.check()
   await expect(checkbox).toBeChecked()
  }

  // Uncheck the last three checkboxes and verify they are unchecked
  for(let checkbox of allDaysCheckBoxes.slice(-3))
  {
   await checkbox.uncheck()
   await expect(checkbox).not.toBeChecked()
  } */

  // Toggeled all checkboxes
  // if unchecked, check it.  if checked, uncheck
  /* for(let checkbox of allDaysCheckBoxes)
  {
   if(await checkbox.isChecked())
   {
      await checkbox.uncheck()
      await expect(checkbox).not.toBeChecked()
   }
   else{
      await checkbox.check()
      await expect(checkbox).toBeChecked()
   }
  }

  //  select the checkboxes at specific randomly
  const indexes=[0,1]
  for(let i of indexes)
  {
    await allDaysCheckBoxes[i].check()
    await expect(allDaysCheckBoxes[i]).toBeChecked()
  }
 */
 // check Monday checkbox using its label 
 const checkboxLocators=
 [
   {label:'Sunday', locator:page.locator("#sunday")},
   {label:'Monday', locator:page.locator("#monday")},
   {label:'Tuesday', locator:page.locator("#tuesday")},
   {label:'Friday', locator:page.locator("#friday")}

 ]
 for(let checkbox of checkboxLocators)
 {
   if(checkbox.label==='Monday')
   {
      await checkbox.locator.click()
   }
 }


})
