/*O encapsulamento é a forma de deixar um atributo ou um método de uma classe disponivel somente dentro da própria classe, sendo impossivel acessar fora da classe. Para isso usamos a "#" antes do nome da prorpiedade ou método se for atributo, devemos indicar antes do construtor, mas dentro da classe mesmo*/

class Account {
    #password
    #balace = 0
    constructor (user) {
        this.email = user.email
        this.#password = user.password
    }
    getBalance (email, password) {
        if (this.#authenticate(email,password)) {
            return this.#balace
        } else {
            return null
        }
            
    } 
    #authenticate (email, password) {
       return this.email === email && this.#password === password
    }

}


const user = {
    email: "paulo@email.com",
    password: "123456" 
}

const myAccount = new Account (user)

console.log(myAccount)
console.log(`Seu saldo é: ${myAccount.getBalance("paulo@email.com", "123456")}`)


