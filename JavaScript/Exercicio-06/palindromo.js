let palavra = prompt('Informe uma palavra:')
let inverso = ''


for (let i = palavra.length - 1; i >= 0 ; i--) {
    inverso += palavra[i]
}    

if (palavra === inverso) {
    alert('Esta palavra é um palindromo!: \n' +
        '\n'+palavra +
        '\n'+inverso
    )
} else {
    alert('Esta palavra não é um palindromo:\n' +
        '\n'+palavra +
        '\n'+inverso
    )
}