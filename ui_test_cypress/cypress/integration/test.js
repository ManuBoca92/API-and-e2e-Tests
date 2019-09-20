/// <reference types="Cypress" />

describe("Allianz QA test", () => {
  before("runs before all steps", () => {
    cy.visit("/");
  });

  it("selects an option", () => {
    var el = cy.get("#booking-iframe-id").iframe();
    el.find(".btn-group").click();

    el.find(".dropdown-menu")
      .contains("Vacaciones")
      .click();
  });

  it("chooses a destination", () => {
    var el = cy.get("#booking-iframe-id").iframe();
    el.find(".btn-group")
      .children(".ng-scope")
      .click();
    el.find('[data-id="multiDestination"]').click();

    el.find(".dropdown-header")
      .contains("Angola")
      .click();
  });
});
