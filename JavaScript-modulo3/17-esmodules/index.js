//Vamos imaginar que na nossa aplicação temos um arquivo javascript com várias funções e que utilizamos essas funções várias vezes:
/*
function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
  }
  
  function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
  }
  
  function br() {
    const element = document.createElement('br')
    return element
  }
*/
// index.js

import { label, input, br } from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())

  console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
  console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
  console.log(br())