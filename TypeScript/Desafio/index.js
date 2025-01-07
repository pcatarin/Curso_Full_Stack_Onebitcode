const numeros = [2,3,0]
const numeros2 = [5,9,8,6,4]

function numerosMagicos (number) {
    const numbers = number.reduce((acum, num) => acum + num, 0)
    const newNum = numbers * number.length
    return newNum
}

console.log(numerosMagicos(numeros2))
console.log(numerosMagicos(numeros))