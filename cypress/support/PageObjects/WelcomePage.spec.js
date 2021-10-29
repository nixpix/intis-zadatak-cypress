export class WelcomePage {
    url = 'https://www.wikipedia.org/'

    visit()
    {
        cy.visit(this.url)
    }

    pageBody()
    {
        return cy.get('#www-wikipedia-org')
    }

    searchBox()
    {
        return cy.get('#searchInput')
    }

    searchButton()
    {
        return cy.get('#search-form > fieldset > button')
    }

    typeSearchBox(searchTerm)
    {
        return this.searchBox().type(searchTerm)
    }

    clickSearchButton()
    {
        return this.searchButton().click()
    }
}