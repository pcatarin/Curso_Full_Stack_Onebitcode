console.log('Programa iniciado!')
//settimeout - executa uma ação depois de um tempo
// const timeoutId = setTimeout(() => {
//     console.log('Se passaram 3 segundos depois que o programa iniciou...')
// },3000)

// clearTimeout(timeoutId)//Faz a limpeza no timeout o cancelando

let seconds = 0
//setInterval - executa uma ação depois de um tempo repetidas vezes
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos...`)
    if (seconds >= 10) {
        clearInterval(intervalId)
        console.log(`Tempo esgotado...Encerrando... `)
    }
},1000)

