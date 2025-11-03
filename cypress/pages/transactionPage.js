class TransactionPage {

    selectorsList(){
        const selectors = {
            friendsPage: "[data-test='nav-contacts-tab']",
            createTransaction: "[data-test='transaction-list-empty-create-transaction-button']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            bottomPay: "[data-test='transaction-create-submit-payment']",
            transactionSucess: "[data-test='alert-bar-success']",
            transactionFail: "[data-test='alert-bar-success']"

        }
         return selectors
    }

    makingTransaction(amount, note){
        cy.get(this.selectorsList().friendsPage).click()
        cy.get(this.selectorsList().createTransaction).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().bottomPay).click()

    }

    checkTransactionValid(){
        cy.get(this.selectorsList().transactionSucess).contains("Transaction Submitted!")
    }

    checkTransactionInvalid(){
        cy.get(this.selectorsList().transactionFail).contains("Transaction Failed! Insufficient Balance")
    }
}
export default TransactionPage