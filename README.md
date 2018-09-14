# Ecommerce-BDDTesting

### Simple test scenarios of an e-commerce website using:
- Cucumber
- Selenium Webdriver
- JavaScript - Node Version v10.10.0

---

###### Tested endpoint:
- [Tested e-commerce webiste](https://www.walmart.com.br)

###### Features:
- Search for a product
- Accessing searched product's page
- Adding product to cart
- Removing a product from cart
- Buying a product 
  - Note: Just checking if credit card option is displayed as performing a purchase was not required

###### Test scenarios:
- Successful search of an existing product
- Successfully loading page of a searched product
- Successfully adding several items of a product to cart
- Successfully removing product from cart containing one product
- Successful purchase using credit card (1 item of a product)
- Successful purchase using credit card (2 items of a product)
  
###### Login observations
- It was needed to create an user account to perfom test. In this case, it was used:
   - [Temporarily E-mail Generator](https://en.getairmail.com)
   - [CPF generator](https://www.geradordecpf.org/)
   - Valid Zip Code 
- Login was considered a Background of each Scenario. Therefore, if prefered to use another user, it will be needed:
   - Make sure a shipping address is added for this user
   - change First Name, login and Password in Background statements.

###### How to Execute Test
Once npm is properly intalled, run
 - To run all test at once: npm test 
 - To run a specific feature: npm test features/feature_file_name