const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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
input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    //esse if deixa só valores especificos do array allowedKeys
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    //esse if aciona o funcionamento do backspace
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    //esse if vai ser a mesma coisa que =
    if (ev.key === 'Enter') {
        calculate()
    }
})

//ativa o botão de igual '='
document.getElementById('equal').addEventListener ('click', calculate)

function calculate () {
    const result = eval(input.value)
    resultInput.value = result
   /*o método EVal serve para executar exatamente o codigo inserido deve ser usado com muita cautela*/
}

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
  
  document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })