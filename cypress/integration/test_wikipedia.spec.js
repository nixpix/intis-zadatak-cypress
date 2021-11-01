/// <reference types="cypress" />

import { WelcomePage } from "../support/PageObjects/WelcomePage.spec";
import { ArticlePage } from "../support/PageObjects/ArticlePage.spec";
import { ViewHistoryPage } from "../support/PageObjects/ViewHistoryPage.spec";

let welcomePage = new WelcomePage();
let articlePage = new ArticlePage();
let viewHistoryPage = new ViewHistoryPage();

describe("Wikipeda - Hrvatski", () => {
    it("search should work correctly", () => {
        welcomePage.visit()
        welcomePage.pageBody()
            .should('contain.text', 'Wikipedia')
            .should('contain.text', 'The Free Encyclopedia')
        
        cy.screenshot('WelcomePage')
        
        welcomePage.typeSearchBox('Juraj Dobrila')
        welcomePage.clickSearchButton()
        articlePage.articleBody()
            .should('contain.text', 'Juraj (Giorgio) Dobrila')
            .should('contain.text', 'Biography')
        
        cy.screenshot('ArticlePage')
    })

    it("selecting article language should work correctly", () => {
        articlePage.selectLanguage('Hrvatski')
        articlePage.articleBody()
            .should('contain.text', 'Životopis')
        articlePage.articleBody()
            .should('contain.text', 'Vidi povijest')

        cy.screenshot('ArticlePageHrvatski ')
    })

    it("searching the edit history should work correctly", () => {
        articlePage.clickViewHistoryTab()

        cy.screenshot('ViewHistoryPage')
        
        // click doesn't react because element is not clickable after page load, 
        // since no API call is made it was not possible to implement dynamic waiting
        // cy.wait(500)

        viewHistoryPage.clickFilterRevisionsToogle()
        viewHistoryPage.clickDateFilterField()
        viewHistoryPage.typeDateFilterInputField('2020-07-01')
        viewHistoryPage.clickShowRevisionsButton()

        viewHistoryPage.viewHistoryBody().should('contain.text','Povijest izmjena stranice »Juraj Dobrila«')
        viewHistoryPage.viewHistoryBody().should('contain.text','Usporedi izabrane inačice')

        cy.screenshot('ViewHistoryPageAfterFiltering')
    })

    it("check first edit history for article", () => {
        viewHistoryPage.historyEntriesList().eq(0).should('contain.text', '21:33, 24. travnja 2020.‎')
    })
})