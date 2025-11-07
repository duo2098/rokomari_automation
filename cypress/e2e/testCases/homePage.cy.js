const LoginPage = require("../Pages/LoginPage");
const credentials = require("../../fixtures/login/credentials.json");
const homePage = require("../Pages/homePage");

Cypress.on("uncaught:exception", () => false);

describe("Authentication (Log in)", () => {
  beforeEach(() => {
    cy.session("userSession", () => {
      LoginPage.submitWithValues();
      cy.url().should("not.include", "login");
    });
    cy.visit(credentials.url);
  });

  it("TC_Login_01: Verify different types of books are displayed on the homepage.", () => {
    cy.wait(4000);
    cy.scrollTo("center");
  });

  it("TC_Login_02: Verify that carousel banner are correctly displayed on the home page.", () => {
    homePage.sliderAssertion();
  });

  it.only("TC_Login_03: Verify that carousel banners are working perfectly.", () => {
    cy.get('button.slick-next[aria-label="Next"]').should("be.visible");

    // Find the Next arrow button and click it
    cy.get('button.slick-next[aria-label="Next"]').click({ multiple: true });
  });
});
