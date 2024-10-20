const person_atk = prompt('Qual o nome do atacante:')
const atk = prompt('Qual seu poder de ataque:')

const person_def = prompt('Qual o nome do defensor:')
let life = prompt('Qual sua vida:')
const def = prompt('Qual seu poder de defesa:')
const shield_def = prompt('Possui escudo?')

let power_atk = parseFloat(atk)
let life_def = parseFloat(life)
let power_def = parseFloat(def)
let dano = 0

alert('Dados: \n' + 
    '\nAtacante: ' + ' ' + person_atk +
    '\nPoder: ' + power_atk +
    '\n' +
    '\nDefensor: ' + person_def +
    '\nVida: ' + life_def +
    '\nPossui Escudo: ' + shield_def
)

if (power_atk > power_def && shield_def === 'não') {
    dano = power_atk - power_def
    life_def -= dano
    
}else if (power_atk > power_def && shield_def === 'sim') {
    dano = (power_atk - power_def) / 2
    life_def -= dano
} 
    
    alert('Dados depois do ataque: \n' + 
    '\nAtacante: ' + ' ' + person_atk +
    '\nPoder: ' + power_atk +
    '\n' +
    '\nDefensor: ' + person_def +
    '\nVida: ' + life_def +
    '\nPossui Escudo: ' + shield_def
)