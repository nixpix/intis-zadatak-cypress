export class ArticlePage {
    articleBody()
    {
        return cy.get('body')
    }

    viewHistoryTab()
    {
        return cy.get('#ca-history > a > span')
    }

    languageSelectionList()
    {
        return cy.get('#p-lang > .vector-menu-content > .vector-menu-content-list')
    }

    clickViewHistoryTab()
    {
        return this.viewHistoryTab().click()
    }

    selectLanguage(language)
    {
        return this.languageSelectionList().contains(language).click()
    }


}