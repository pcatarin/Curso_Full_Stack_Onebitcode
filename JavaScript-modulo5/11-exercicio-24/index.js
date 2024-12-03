function imc (weight, height) {
    return new Promise ((resolve, reject) => {
        if ( typeof weight !== "number" ||  typeof height !== "number") {
            reject('os parametros devem ser numéricos!')
        } else {
            resolve( weight / (height ** 2))
        }
    })
}

function showImc (weight, height) {
    imc(weight, height).then((result) => {
        if (result < 18.5) console.log(`IMC: ${result} Situação: MAGREZA`)
        else if (result < 25) console.log(`IMC: ${result} Situação: NORMAL`)
        else if (result < 30) console.log(`IMC: ${result} Situação: SOBRE PESO`)
        else if (result < 40) console.log(`IMC: ${result} Situação: OBESIDADE`)
        else console.log(`IMC: ${result} Situação: OBESIDADE GRAVE`)
    }).catch ((err) => {
        console.log(err)
    })

    console.log(`Calculando...`)
}

showImc(140, 'texto')
showImc(140, 1.70)
showImc(70, 1.80)
showImc(85, 1.65)
showImc(65, 1.50)
