export class WelcomePage {
  url = "https://www.wikipedia.org/";

  visit() {
    cy.visit(this.url, {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", { value: "en-GB" });
        Object.defineProperty(win.navigator, "languages", { value: ["en"] });
        Object.defineProperty(win.navigator, "accept_languages", {
          value: ["en"],
        });
      },
      headers: {
        "Accept-Language": "de",
      },
    });
  }

  pageBody() {
    return cy.get("#www-wikipedia-org");
  }

  pageHeader() {
    return cy.get("#www-wikipedia-org > div.central-textlogo");
  }

  searchBox() {
    return cy.get("#searchInput");
  }

  searchButton() {
    return cy.get("#search-form > fieldset > button");
  }

  typeSearchBox(searchTerm) {
    return this.searchBox().type(searchTerm);
  }

  clickSearchButton() {
    return this.searchButton().click();
  }
}
