class User {
    constructor (fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
    }
    login (email, password) {
        if (email === this.email && password === this.password) {
            console.log(`Entrada Autorizada`)
        } else {
            console.log(`Email ou Senha não confere!`)
        }
    }
}

const paulo = new User ("Paulo Rogério Catarin", "email@email.com", 12345)

console.log(paulo)
paulo.login("email@email.com", 12345)