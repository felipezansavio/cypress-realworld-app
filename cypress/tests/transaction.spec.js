import LoginPage from '../pages/loginPage.js'
import TransactionPage from '../pages/transactionPage.js'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Transaction Test', () => {

  it('Transaction - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser('usernametest', 'password')
    transactionPage.makingTransaction('500', 'Deposito')
    transactionPage.checkTransactionValid()
  })
  it('Transaction - Fail', () => { 
    loginPage.acessLoginPage()
    loginPage.loginWithUser('usernametest', 'password')
    transactionPage.makingTransaction('99999999999999', 'Deposito')
    transactionPage.checkTransactionInvalid()
  })

})