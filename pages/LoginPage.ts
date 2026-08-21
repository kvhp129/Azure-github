/* import {Page,Locator} from "@playwright/test"

export class LoginPage
{
    //define the variable : using private readonly 
    private readonly page:Page;
    
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;

  constructor(page:Page)
  {
    this.page=page;
    this.userNameInput=this.page.locator("input[name='username']")
    this.passwordInput=this.page.locator("input[name='password']")
    this.loginButton=this.page.locator("button[type='submit']")
  }
   
  // action methods
  async enterUserName(username:string)
  {
    await this.userNameInput.fill(username)
  }
  async enterPassword(password:string)
  {
    await this.passwordInput.fill(password)
  }
  async clickLoginButton()
  {
    await this.loginButton.click()
  }

  async performLogin(username:string,password:string)
  {
    await this.userNameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }


} */

import { Page,Locator } from "@playwright/test"
export class LoginPage
{
  // define variales
  private readonly page:Page
  private readonly usernameInput:Locator
  private readonly passwordInput:Locator
  private readonly loginLink:Locator

  constructor(page:Page)
  {
      this.page=page
      this.usernameInput=this.page.locator("input[name='username']")
      this.passwordInput=this.page.locator("input[name='password']")
      this.loginLink=this.page.locator("button[type='submit']")
  }

  // actions
  async enterUserName(username:string)
  {
    await this.usernameInput.fill(username)
  }
  async enterPassword(password:string)
  {
    await this.passwordInput.fill(password)

  }
  async clickLoginButton()
  {
    await this.loginLink.click()
  }
  async performLogin(username:string,password:string)
  {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginLink.click()
  }

}  