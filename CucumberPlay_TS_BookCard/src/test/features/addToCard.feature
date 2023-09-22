Feature: Products test

  Background:
    Given User navigates to the application
    Then User click on the login link

  Scenario Outline: Add to cart
    Then User enter the username as "<username>"
    Then User enter the password as "<password>"
    When User click on the login button
    Then user search for a "<book>"
    When user add the book to the cart
    Then the cart badge should get updated

    Examples:
      | username   | password     | book            |
      | Kasthuri   | kasthuri@123 | Roomies         |
      | Kasthuri   | kasthuri@123 | The Simple Wild |
      | Kasthuri   | kasthuri@123 | the hate u give |

  