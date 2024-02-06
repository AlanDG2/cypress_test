Feature: QA Challenge
  
  Background:
  Given I visit the login page
  When I fill in the username "user" and password "user"




  Scenario Outline: logout and  Login with different credentials
    When I click on the account menu
    And I click "Logout"
    Then I should be redirected to the login page with "logout" and "login" endpoints   
    Given I visit the login page
    When I fill in the username "<username>" and password "<password>"
    Then I should see "<expectedMessage>" message

    Examples:
      | username      | password     | expectedMessage                                               |
      |   user        |  error       |Failed to sign in! Please check your credentials and try again.|
      |   user        |  user        |Welcome to QA Challenge!                                       |


