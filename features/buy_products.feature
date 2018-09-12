Feature: Buy a Product

   As a costumer accessing an e-commerce website, I want be able to buy a product.

   Background:
   Given The e-commerce website is acessible
   And I am logged into the e-commerce website

   Scenario: Successfull Purchase 
   Given I had successfully added a product to my cart
   When I proceed to Check Out
   And I select a shipping address
   And I select a payment method
   And I confirm the operation
   Then A confirmation message is shown
   And My purchase id is informed


   Scenario: Empty Payment Method
   Given I had successfully added a product to my cart
   And I had proceeded to Check Out
   And I had select a shipping address
   When I try to confirm operation without selecting a payment method
   Then Required fields will be highlighted
   And I won't be able to confirm the purchase


 

