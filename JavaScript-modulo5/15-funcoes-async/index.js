//Funções async são uma forma mais conveniente de se trabalhar com promises no javascript moderno. Elas permitem criar funções que automaticamente retornam uma promise, sem que nós precisemos instanciá-la:
//Podemos ver através do exemplo da anterior que elas funcionam da mesma forma, mesmo quando utilizamos o Promise.all():
//Ou ainda no exemplo com o Array.map():

async function asyncSum(a, b) {
    return a + b
}

function asyncSubtract(a, b) {
    return a - b
}

const sumResult = asyncSum(50,33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

/****************************Outra forma********************************************************/

const numbers = [4, 9, 5, 88, 77]

async function asyncSquare (x) {
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})