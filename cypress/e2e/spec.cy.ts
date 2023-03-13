describe("HomeComponents", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the header", () => {
    cy.contains("Github Search");
    cy.get(".logo svg").should("be.visible");
  });

  it("searches for users", () => {
    cy.get(".search input").type("RodrigoJuniorLiyah");
    cy.get(".results .result").should("have.length", 1);
  });

  it("shows a spinner while searching for users", () => {
    cy.get(".search input").type("RodrigoJuniorLiyah");
    cy.get(".containerSpinner .spinner").should("be.visible");
  });

  it("shows a modal with user information", () => {
    cy.get(".search input").type("RodrigoJuniorLiyah");
    cy.get(".results .result").first().click();
    cy.get(".modal").should("be.visible");
    cy.get(".modal .header span").should("contain", "RodrigoJuniorLiyah");
  });

  it("closes the modal when the close button is clicked", () => {
    cy.get(".search input").type("RodrigoJuniorLiyah");
    cy.get(".results .result").first().click();
    cy.get(".modal .header button").click();
    cy.get(".modal").should("not.be.visible");
  });
});
