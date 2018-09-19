# Ecommerce-BDDTesting

### Simple test scenarios of an e-commerce website using:
- Cucumber
- Selenium Webdriver
- JavaScript 

---

###### Tested endpoint:
- [Tested e-commerce webiste](https://www.walmart.com.br)

###### Features:
- Search for a product
- Accessing searched product's page
- Adding product to cart
- Removing a product from cart
- Buying a product 
  - Note: Only checking if credit card option is displayed

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
   - Change "Firstname", "Login" and "Password' in the following Background statement:
     - Given I am logged with "Firstname" using login="Login" and password="Password"

###### How to Execute Test
1. Install NPM and Node 
2. Access the repository folder via terminal, and:
 - To run all test at once: npm test 
 - To run a specific feature: npm test features/feature_file_name