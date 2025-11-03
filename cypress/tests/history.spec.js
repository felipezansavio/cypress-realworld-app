import LoginPage from '../pages/loginPage.js'
import UserRegisterPage from '../pages/userRegisterPage.js'
import HistoryPage from '../pages/historyPage.js'
import CreateBankPage from '../pages/createBankPage.js'

const loginPage = new LoginPage()
const userRegisterPage = new UserRegisterPage()
const historyPage = new HistoryPage()
const createBankPage = new CreateBankPage()


describe('Hystory Test', () => {

  it('Transaction - True', () => {
    loginPage.acessLoginPage()
    userRegisterPage.acessRegisterPage()
    userRegisterPage.fillingRegisterUser('FirstNameTest', 'LastNameTest', 'usernametest', 'password', 'password')
    userRegisterPage.clickButtonsignin()
    loginPage.loginWithUser('usernametest', 'password')
    historyPage.checkingHistory()
    historyPage.checkingTrasaction()
  })

  it('Transaction - False', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser('usernametest', 'password')
    historyPage.checkingHistory()
    historyPage.checkingNoTrasaction()
  })

})