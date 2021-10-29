/// <reference types="cypress" />

import { WelcomePage } from "../support/PageObjects/WelcomePage.spec";
import { ArticlePage } from "../support/PageObjects/ArticlePage.spec";
import { ViewHistoryPage } from "../support/PageObjects/ViewHistoryPage.spec";
import 'cypress-wait-until';

let welcomePage = new WelcomePage();
let articlePage = new ArticlePage();
let viewHistoryPage = new ViewHistoryPage();

describe("Wikipeda - Hrvatski", () => {
    it("search should work correctly", () => {
        welcomePage.visit()
        welcomePage.pageBody().should('contain.text', 'Wikipedia').should('contain.text', 'The Free Encyclopedia')
        
        cy.screenshot('WelcomePage')
        
        welcomePage.typeSearchBox('Juraj Dobrila')
        welcomePage.clickSearchButton()
        
        cy.screenshot('ArticlePage')
    })

    it("selecting article language should work correctly", () => {
        articlePage.selectLanguage('Hrvatski')
        cy.screenshot('ArticlePageHrvatski ')
    })

    it("searching the edit history should work correctly", () => {
        articlePage.clickViewHistoryTab()
        cy.screenshot('ViewHistoryPage')
        cy.wait(500)

        viewHistoryPage.clickFilterRevisionsToogle()
        viewHistoryPage.clickDateFilterField()
        viewHistoryPage.typeDateFilterInputField('2020-07-01')
        viewHistoryPage.clickShowRevisionsButton()
    })

    it("searching edit history should consider daylight savings change", () => {
    
    })
})