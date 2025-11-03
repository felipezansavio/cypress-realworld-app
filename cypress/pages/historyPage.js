class HistoryPage{

    selectorsList(){
        const selectors = {
            historyPage: "[data-test='nav-public-tab']",
            transactions: "[data-test='main']",
            noTransactions: "[data-test='empty-list-header']",
            transationEmpty: "[data-test='alert-bar-success']",
            transactionSucess: "[data-test='alert-bar-success']",
            buttomAll: "[data-test='transaction-list-filter-date-range-button']"

        }
        return selectors
    }

    checkingHistory(){
        cy.get(this.selectorsList().historyPage).click()
    }

    checkingTrasaction(){
        cy.get(this.selectorsList().transactions).should('be.visible')
    }

    checkingNoTrasaction(){
        cy.get(this.selectorsList().noTransactions).contains("No Transactions")
        cy.get(this.selectorsList().noTransactions)        
    }
}
export default HistoryPage