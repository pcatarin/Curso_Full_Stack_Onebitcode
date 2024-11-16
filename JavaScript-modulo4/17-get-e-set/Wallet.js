class Wallet {
    #amount
    #username

    constructor () {
        this.#amount = 100.99 * 100 //assim eu apresento o valor sem vigulas somente dentro da class que pode ser definido como uma regra para dentro da class, para facilitar sua manipulação e até mesmo acupar menos espaço de memória
    }

    get amount () {
        return this.#amount / 100 //no momento de apresentar o valor definimos nova regra para deixar o valor no formato padrão
    }

    getAmount () {
        return this.#amount / 100
    }

    set username (newUserName) {//no set, é obrigatório o uso do parametro para que ele possa ser usado na chamada, fazendo assim nova atribuição ou troca de valores. O set é usado em atributos privados para que essa alteração seja feita somente dentro desse set, protegendo assim seu valor, como forma de segurança.
        if (typeof newUserName ==="string") {//podemos fazer uma verificação antes, para assim autorizar a alteração ou não.
            this.#username = newUserName
        } else {
            console.log("username must be of type string")
        }
    }

    get username () {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(`Este é o get: ${myWallet.amount}`)//quando vamos exibir um get não temos a necessidade da colocar os parenteses no final usado como se fosse uma propriedade da class

console.log(`Este é o método: ${myWallet.getAmount()}`)//já quando usamos um método temos que colocar os parenteses, os dois tem a mesma função

myWallet.username = "Paulo"
console.log(myWallet.username)
myWallet.username += " Rogério"
console.log(myWallet.username)

myWallet.username = 45
console.log(myWallet.username)