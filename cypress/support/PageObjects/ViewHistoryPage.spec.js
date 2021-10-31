export class ViewHistoryPage {
    viewHistoryBody()
    {
        return cy.get('body')
    }

    filterRevisionsToogle()
    {
        return cy.get('#mw-history-search > legend')
    }

    dateFilterField()
    {
        return cy.get('.mw-widget-dateInputWidget-handle')
    }

    dateFilterInputField()
    {
        return cy.get('div.oo-ui-widget:nth-child(5)')
    }

    showRevisionsButton()
    {
        return cy.get('.oo-ui-inputWidget-input > .oo-ui-labelElement-label')
    }

    filterRevisionsCollapsible()
    {
        return cy.get('.oo-ui-fieldsetLayout-group')
    }

    historyEntriesList()
    {
        return cy.get('#pagehistory > li') 
    }

    clickFilterRevisionsToogle()
    {
        return this.filterRevisionsToogle().click()
    }

    clickDateFilterField()
    {
        return this.dateFilterField().click()
    }
    
    // typeDateFilterField(date)
    // {
    //     return this.dateFilterField().type(date, {force: true})
    // }

    typeDateFilterInputField(date)
    {
        return this.dateFilterInputField().type(date)
    }

    clickShowRevisionsButton()
    {
        return this.showRevisionsButton().click()
    }
}