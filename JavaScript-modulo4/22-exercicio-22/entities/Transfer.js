module.exports = class Transfer {
    constructor (userSend, userRec, value) {
        this.userSend = userSend
        this.userRec = userRec
        this.value = value
        this.dateTransfer = new Date()
    }
}