const baseUrl = "https://www.rokomari.com/";

class BasePage {
  element = {
    email: () =>
      cy
        .get('input[placeholder="Email or phone"]')
        .type("vosebi5919@foxroids.com"),
    password: () => cy.get('input[type="password"]').type("123456789"),
    continueButton: () => cy.get("button.btn.btn-block#js--btn-next").click(),
    loginButton: () =>
      cy.get('button.btn.btn-block[type="submit"]').contains("Login").click(),
  };

  //   visit() {
  //     cy.visit("https://www.rokomari.com/");
  //   }

  SignInButton() {
    cy.contains("a", "Hello, Sign in").click();
  }

  PopUpPage() {
    cy.get(
      "button.popup-modal__close-btn.close-btn-outside.js--popup-modal__close-btn"
    ).click();
  }
}

module.exports = new BasePage();
