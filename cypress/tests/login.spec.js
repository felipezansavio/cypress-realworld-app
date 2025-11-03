import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
describe('Login Real World App Test', () => {

  it('Login - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser('Dina20','s3cret')
    loginPage.checkAcessHomePage()
  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser('Dina20','1234')
    loginPage.checkAcessInvalid()
})
})