const input = document.getElementById('input')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

import { calculate } from "./calculate.js"

export function buttonKey (ev){
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
}