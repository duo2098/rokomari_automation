const LoginPage = require("../../BasePage/Pages/LoginPage");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Rokomari Website Run", () => {
  beforeEach(() => {
    LoginPage.submitWithValues();
  });

  it.only("TC_01: Home Page Scroll", () => {
    cy.wait(4000);
    // cy.get("ul.main-menu li")
    //   .eq(0)
    //   .find("a")
    //   .should("have.text", "হোম")
    //   .click();
    cy.get(".logged-in-user-menu-btn").trigger("mouseover");
    cy.scrollTo("bottom");
  });
});
