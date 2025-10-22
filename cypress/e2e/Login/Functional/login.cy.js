const LoginPage = require("../Pages/LoginPage");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://www.rokomari.com/");
  });

  it.only("TC_01: Login Rokomari dashboard", () => {
    cy.wait(4000);
    LoginPage.PopUpPage();
    cy.wait(3000);
    LoginPage.SignInButton();
    cy.wait(3000);
    LoginPage.element.email();
    LoginPage.element.continueButton();
    cy.wait(2000);
    LoginPage.element.password();
    cy.wait(2000);
    LoginPage.element.loginButton();
  });
});
