class CreateBankPage{

    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[data-test='signin-submit']",
            bottomNext: "[data-test='user-onboarding-next']",
            bankName: "[name='bankName']",
            routingNumber: "[name='routingNumber']",
            accountNumber: "[name='accountNumber']",
            bottomSave: "[data-test='bankaccount-submit']",
            bottomDone:"[data-test='user-onboarding-next']"
        }
        return selectors
    } 

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }


    fillingCreateBank(bankName, routingNumber, accountNumber){
        cy.get(this.selectorsList().bottomNext).click()
        cy.get(this.selectorsList().bankName).type('Bank Test2')
        cy.get(this.selectorsList().routingNumber).type('123456789')
        cy.get(this.selectorsList().accountNumber).type('987654321')
        cy.get(this.selectorsList().bottomSave).click()
        cy.get(this.selectorsList().bottomDone).click()
    }

}
export default CreateBankPage