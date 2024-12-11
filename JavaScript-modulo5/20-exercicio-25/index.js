async function imc (weight, height) {
    if ( typeof weight !== "number" ||  typeof height !== "number") {
        return Promise.reject('os parametros devem ser numéricos!')
    }
    return ( weight / (height ** 2))
}

async function showImc (weight, height) {
    
    try {
        const result = await imc(weight,height)
        console.log(`Calculando para o Peso:${weight}kg Altura:${height}m`)
        if (result < 18.5) console.log(`IMC: ${result} Situação: MAGREZA`)
            else if (result < 25) console.log(`IMC: ${result} Situação: NORMAL`)
            else if (result < 30) console.log(`IMC: ${result} Situação: SOBRE PESO`)
            else if (result < 40) console.log(`IMC: ${result} Situação: OBESIDADE`)
            else console.log(`IMC: ${result} Situação: OBESIDADE GRAVE`)
    } catch (err) {
        console.log(err)
    }

}

showImc(60, 'text')
showImc(140, 1.70)
showImc(70, 1.80)
showImc(85, 1.65)
showImc(65, 1.50)