const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const App = require('./App')

App.createUser('paulo@email.com', 'Paulo Catarin')
App.createUser('patricia@email.com', 'Patricia Barreto')
App.createUser('guilherme@email.com', 'Guilherme B. Catarin')

App.deposit('paulo@email.com', 200)

App.transfer('paulo@email.com', 'patricia@email.com', 50)

App.changeLoanFee(5)
App.takeLoan('guilherme@email.com', 3000, 24)


console.log(App.findUser('paulo@email.com'))
console.log(App.findUser('paulo@email.com').account)
console.log(App.findUser('patricia@email.com'))
console.log(App.findUser('patricia@email.com').account)
console.log(App.findUser('guilherme@email.com'))
console.log(App.findUser('guilherme@email.com').account)
console.log(App.findUser('guilherme@email.com').account.loans[0].installments)


// const newDeposit = new Deposit(30.99)
// const newLoan = new Loan(1100, 20)

// console.log(newDeposit.depositDate)
// console.log(newDeposit.value)
// console.log(newLoan)


