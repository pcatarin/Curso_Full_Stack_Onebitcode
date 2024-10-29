const input = document.getElementById('input')

import { calculate } from "./calculate.js"
import { buttonKey } from "./buttons.js"
import { themeAlternate } from "./themes.js"

//essa função ativa os botões na calculadora
document.querySelectorAll('.charKey').forEach (function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})
//ativa o botão clear 'C'
document.getElementById('clear').addEventListener('click', function (){
    input.value = ''
    input.focus()
})

//função para previnir a entrada de caracteres que não sejam números
input.addEventListener('keydown', buttonKey)


//ativa o botão de igual '='
document.getElementById('equal').addEventListener ('click', calculate)




document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })
  
document.getElementById("themeSwitcher").addEventListener("click", themeAlternate)
