module.exports = class Loan {
    static #tax = (100/10) 

    constructor (valueLoan) {
        this.valueLoan = valueLoan
        this.dateLoan = new Date()
    }

    static get taxValue () {
        return 
    }
}