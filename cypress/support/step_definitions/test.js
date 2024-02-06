import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../pageObjects/loginPage';


Given('I visit the login page', () => {
    cy.visit('https://qa-challenge.ensolvers.com/login'); // Ajusta la URL según tu aplicación
  });
  
When('I fill in the username {string} and password {string}', (username, password) => {
    loginPage.typeUserName(username);
    loginPage.typePass(password);
    loginPage.clickOnSubmitButton();
  });

When('I click on the account menu', () => {
  loginPage.clickOnAccountMenu();
});

When('I click "Logout"', () => {
  loginPage.clickOnLogoutButton();
});

Then('I should be redirected to the login page with {string} and {string} endpoints', (logoutEndpoint, loginEndpoint) => {
  loginPage.verifyEndpoint(logoutEndpoint);
  loginPage.clickOnHomeButton();
  loginPage.verifyEndpoint(loginEndpoint);
});

Then('I should see {string} message', (expectedMessage) => {
    if (expectedMessage === "Welcome to QA Challenge!") {
      loginPage.loggedsuccessfully();
    } else {
      loginPage.errorOnCredentials(expectedMessage);
    }
  });




  










  

/*



Feature: Desafío QA

  Background:
    Dado que visito la página de inicio de sesión

  Scenario Outline: Inicio de sesión con diferentes credenciales
    Given que visito la página de inicio de sesión
    When ingreso el nombre de usuario "<username>" y la contraseña "<password>"
    Then hago clic en el botón de inicio de sesión
    Then debería ver el mensaje "<expectedMessage>"

    Examples:
      | username | password   | expectedMessage                    |
      |          |            | Username cannot be empty!          |
      | user     | user       | Welcome to Ensolvers QA Challenge! |

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { loginPage } = require('../pages/loginPage');


  Given('que visito la página de inicio de sesión', () => {
    cy.visit('https://qa-challenge.ensolvers.com/login');
  });
  
  When('ingreso el nombre de usuario {string} y la contraseña {string}', (username, password) => {
    loginPage.typeUserName(username);
    loginPage.typePass(password);
  });
  
  When('hago clic en el botón de inicio de sesión', () => {
    loginPage.clickOnSubmitButton();
  });
  
  Then('debería ver el mensaje {string}', (expectedMessage) => {
    if (expectedMessage === "Welcome to Ensolvers QA Challenge!") {
      loginPage.loggedSuccessfully(expectedMessage);
    } else {
      loginPage.emptyInputMessage(expectedMessage);
    }
*/