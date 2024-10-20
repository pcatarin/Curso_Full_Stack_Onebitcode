let car1 = prompt('Qual o primeiro carro:')
let entrada1 = prompt('Qual sua velocidade:')

let car2 = prompt('Qual o segundo carro:')
let entrada2 = prompt('Qual sua velocidade:')

let speed1 = parseFloat(entrada1)
let speed2 = parseFloat(entrada2)

if (speed1 > speed2) {
    alert(car1 + ' ' + 'é mais rapido.')
}    
    if (speed1 < speed2){
        alert(car2 + ' ' + 'é mais rapido.')
    }
    if (speed1 === speed2) {
        alert('Os dois carros tem a mesma velocidade.')
    }
