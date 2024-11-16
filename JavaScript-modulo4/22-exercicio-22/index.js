const Deposit = require("./entities/Deposit");

const newDeposit = new Deposit(30.99)

console.log(newDeposit.depositDate)
console.log(newDeposit.value)
