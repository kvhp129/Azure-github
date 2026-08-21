

import { test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import loginData from "../testData/loginData.json"

for (const data of loginData){

test(`Login Test - ${data.name}`,async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

const loginPage=new LoginPage(page)

await loginPage.enterUserName(data.username)
await loginPage.enterPassword(data.password)
await loginPage.clickLoginButton()

// Validate the Results
if(data.expectedResult=="success")
{
    await expect(page).toHaveURL(/dashboard/)
}
else if(data.expectedResult=='Required')
{
    const errorMessage=page.locator('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
    if(data.name==='emptyCredentials')
    {
       await expect(errorMessage).toHaveCount(2)

    }
    else{
        await expect(errorMessage).toHaveCount(1)
       
        }
         await expect(errorMessage.first()).toHaveText("Required")
}
else{
    await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText("Invalid credentials")
}


})



}







