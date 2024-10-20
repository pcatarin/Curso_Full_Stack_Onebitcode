const turist = prompt('Como você se chama?')
let city = ""
let numberCitys = 0
let visit = prompt(turist + ' ' + 'você já visitou alguma cidade?')

while (visit === 'sim') {
    city +=  '\n-'+ prompt('Qual o nome da cidade?')
    numberCitys++
    visit = prompt(turist + ' ' + 'já visitou alguma outra cidade?')
}

alert('O turista ' + turist + ' já visitou: ' + numberCitys + ' Cidades.' + 
    '\n' + city
)
