/* import { test,expect} from "@playwright/test"
test("Search a product and click the first product", async({page})=>{

  // Navigate to the Amazon
  await page.goto("https://www.amazon.in/ref=cs_404_link") 
  
  // Enter the product name
  await page.locator("#twotabsearchtextbox").fill("iPhone 16")
  // click the search button

  // await page.locator("#twotabsearchtextbox").press('Enter') 
  await page.locator("#nav-search-submit-button").click()

  // wait for search results page to load
  //await page.waitForLoadState('networkidle')

  // Locate all product title
  const products= page.locator("div[data-component-type='s-impression-counter'] h2 span")
  
  // verify that  atleast one product is displayed
  await expect(products.first()).toBeVisible()

  // count the number of products
  const productsCount=await products.count()
  console.log("Number of products:", productsCount)

  //print product titles
  for(let i=0;i<productsCount;i++)
    {
       console.log(await products.nth(i).innerText())
    }
  

  // print the first product title
 const firstProduct=await products.nth(0).innerText()
 console.log("First product title:",firstProduct)

 // Click the first product
 await products.nth(0).click()

})

 */









