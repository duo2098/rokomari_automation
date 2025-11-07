const baseUrl = "https://www.rokomari.com/";
const email = "vosebi5919@foxroids.com";
const password = "123456789";

class BasePage {
  //   element = {
  //     email: () =>
  //       cy
  //         .get('input[placeholder="Email or phone"]')
  //         .type("vosebi5919@foxroids.com"),
  //     password: () => cy.get('input[type="password"]').type("123456789"),
  //     continueButton: () => cy.get("button.btn.btn-block#js--btn-next").click(),
  //     submitButton: () =>
  //       cy.get('button.btn.btn-block[type="submit"]').contains("Login").click(),
  //   };

  visit() {
    cy.visit(`${baseUrl}`);
  }

  submitWithValues() {
    this.visit();
    cy.get(
      "button.popup-modal__close-btn.close-btn-outside.js--popup-modal__close-btn"
    ).click();
    cy.contains("a", "Hello, Sign in").click();
    cy.get('input[placeholder="Email or phone"]').type(`${email}`);
    cy.get("button.btn.btn-block#js--btn-next").click();
    cy.get('input[type="password"]').type(`${password}`);
    cy.get('button.btn.btn-block[type="submit"]').contains("Login").click();
  }

  titleAssertion() {
    cy.get('a[href*="/login"]')
      .should("be.visible")
      .and("have.attr", "title", "Sign in")
      .and("contain.text", "Sign in");
  }
}

module.exports = new BasePage();
