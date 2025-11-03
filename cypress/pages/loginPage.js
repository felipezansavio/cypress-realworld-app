class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[data-test='signin-submit']",
            homePage: ".css-1idn90j-MuiGrid-root",   
            errorAlert: "[data-test='signin-error']",        
        }

        return selectors
    } 

    acessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAcessHomePage() {
        cy.get(this.selectorsList().homePage).should('be.visible')
    }

    checkAcessInvalid() {
        cy.get(this.selectorsList().errorAlert).should('be.visible')
        cy.get(this.selectorsList().errorAlert).should('contain', 'Username or password is invalid')
    }
}
export default LoginPage