
 import { test,expect } from "@playwright/test"
test(" Capture the iphone16 products from Flipkart", async ({page})=>{

    // Navigate to the Flipkart appication
    await page.goto("https://www.flipkart.com/")

    // Search for the iphone16 product
    const searchBox=page.locator("input[placeholder='Search for Products, Brands and More']").nth(0)
    await searchBox.fill("iphone16")
    await searchBox.press("Enter")

    // Locate all matching products
    const allProducts=page.locator(".RG5Slk")

    // Wait until the products are loaded
    await expect(allProducts.first()).toBeVisible()
    const count=await allProducts.count()
    //console.log("Count of iphone16 products:",count)
    expect(count).toBeGreaterThan(0)

   /*  // Printing all matching products 
    let MatchFound=false
    for(let i=0;i<count;i++)
    {
        const productText=(await allProducts.nth(i).innerText()).trim()
        //console.log(productText)

        // Find and Select the required product

        if(productText==='Apple iPhone 16 (White, 128 GB)')
        {
            await allProducts.nth(i).click()
            await page.waitForLoadState("load");
            MatchFound=true
            break;
        }
    }
   expect(MatchFound).toBeTruthy() */

 //console.log(await allProducts.innerText())   
 //console.log(await allProducts.first().textContent()) 
 //console.log(await allProducts.allInnerTexts()) 
 //console.log(await allProducts.allTextContents()) 


 })



 






