Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    Then User click on the login link

  Scenario: Login should be success
    Then User enter the username as "Kasthuri"
    Then User enter the password as "kasthuri@123"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Then User enter the username as "Kasthurii"
    Then User enter the password as "kasthuri@12345"
    When User click on the login button
    Then Login should fail