import api from "../../src/services/api";
import getAPIClient from "../../src/services/api";

describe("getAPIClient", () => {
  it("returns the correct user", () => {
    const userName = "RodrigoJuniorLiyah";
    cy.wrap(api.get(`/search/users?q=${userName}`)).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.data.items[0].login).to.eq(userName);
    });
  });
});
