//Na aula anterior vimos como trabalhar com funções async, porém apenas com o resolve. Mas as funções async também permitem rejeitar uma promise. Podemos fazer isso através do objeto global Promise e seu método .reject():

async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments sum must be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments subtract must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50,null)
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