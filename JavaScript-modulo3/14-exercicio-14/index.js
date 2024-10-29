/*criar uma constante como uma arrow function, que recebe como paramêtro o operador spread e um nome '...numbers'  assim a função poderá receber qualquer quantidade de parametros*/ 

//primeira função média dos valores
const averege = (...numbers) => {

    /*utilizamos o método '.reduce' que faz a soma de todos os valores do array que recebe um acumulador e o (num-que se refere ao item atual do array) e um inicializador que vai dizer o valor que vai iniciar */

    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`A média dos valores é: ${averege(3,6,10,9)}`)

//segunda função média ponderada
const weigthedAverege = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce ((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

/*podemos usar o operador coalecencia nula (valor-procurado '??' valor-padrão) onde do lado esquerdo colocamos o atributo para caso um atributo não exista considerar um valor padrão informado ao lado direito como se fosse um 'if' simplificado*/

console.log(`A média ponderada é igual a: ${weigthedAverege(
    {number: 9, weight:3},
    {number: 7},/*como neste caso*/
    {number: 10, weight:1}
)}`)

//terceira função mediana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    //dessa maneira clonei o array para não alterar o original
    //e fiz a ordenação de forma crescente
    
    const middle = Math.floor(orderedNumbers.length / 2)
    /*este método math.floor serve para pegar o maior inteiro que é menor ou igual ao argumento que for passado */

    /*Vamos fazer um 'if' para sabermos se o tamanho é impar e pegar o elemento central */
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }

    /*se o numero for par precisamos pegar os dois elementos centrais */
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    /*E retornamos a média dos valores utilizando nossa primeira função já criada */
    return averege(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

//terceira função moda, o elemento que aparece mais vezes
const mode = (...numbers) => {
    //variavel para armazenar quantas vezes cada elemento aparece
    //retorno do quantities[[n,qtd],[n,qtd],[n,qtd]]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities [0] [0] 
}
console.log(`Moda: ${mode(1, 1, 5, 5, 5, 5, 5, 4, 9, 7, 3, 5, 2, 4, 0, 4)}`)