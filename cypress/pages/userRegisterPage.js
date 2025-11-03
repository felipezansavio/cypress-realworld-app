class UserRegisterPage {
    selectorsList() {
        const selectors = {
            signinButton:"[data-test='signup']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            signupButton: "[data-test='signup-submit']",      
        }

        return selectors
    } 

    fillingRegisterUser(firstname, lastname, username, password, confirmPassword){
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPassword).type(confirmPassword)
    }

    acessRegisterPage() {
        cy.get(this.selectorsList().signinButton).click()
    }

    clickButtonsignin(){
        cy.get(this.selectorsList().signupButton).click()
    }

    checkButtonRegisterDisable(){
        cy.get(this.selectorsList().signupButton).should('be.disabled')
    }
}
export default UserRegisterPage