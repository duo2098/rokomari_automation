class HomePage {
  sliderAssertion() {
    cy.get(".slick-list.draggable").should("exist").and("be.visible");

    // Assert that there are multiple slides inside the carousel
    cy.get(".slick-slide").should("have.length.greaterThan", 1);

    // Assert the active slide is visible and contains an image
    cy.get(".slick-slide.slick-current.slick-active")
      .should("be.visible")
      .find("img")
      .should("have.attr", "src")
      .and("include", "https://rokbucket.rokomari.io/banner/");

    // Optionally: verify the alt text of the image is not empty
    cy.get(".slick-slide.slick-current.slick-active img")
      .invoke("attr", "alt")
      .should("not.be.empty");
  }
}

module.exports = new HomePage();
