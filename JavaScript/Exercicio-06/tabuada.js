const number = parseFloat(prompt('Informe o número que deseja calcular:'))
let result = 0

for (let i = 1 ; i <= 20 ; i++) {
    newNumber = number * i
    result += '\n-' + newNumber
}

alert('O resultado dos cálculos é:\n' +
    '\n'+ result
)