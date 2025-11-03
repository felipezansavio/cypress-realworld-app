import UserRegisterPage from '../../pages/userRegisterPage.js'
import LoginPage from '../../pages/loginPage.js'
import CreateBankPage from '../../pages/createBankPage.js'

const userRegisterPage = new UserRegisterPage()
const loginPage = new LoginPage()
const createBankPage = new CreateBankPage()

describe('Register User Tests', () => {

  it('Register User - Sucess', () => {
    loginPage.acessLoginPage()
    userRegisterPage.acessRegisterPage()
    userRegisterPage.fillingRegisterUser('FirstNameTest', 'LastNameTest', 'usernametest', 'password', 'password')
    userRegisterPage.clickButtonsignin()
    loginPage.acessLoginPage()
    loginPage.loginWithUser('usernametest','password')
    createBankPage.fillingCreateBank()
  })

  it('Register User - Fail', () => {
    loginPage.acessLoginPage()
    userRegisterPage.acessRegisterPage()
    userRegisterPage.fillingRegisterUser('FirstNameTest', 'LastNameTest', 'usernametest', '123', '123')
    userRegisterPage.checkButtonRegisterDisable()
  })
  
  })