const LoginPage = require("../Pages/LoginPage");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Authentication (Log in)", () => {
  beforeEach(() => {
    LoginPage.submitWithValues();
  });

  it.only("TC_Login_01: Verify the Sign in page title.", () => {
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
