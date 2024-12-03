//Estados da promisse
//pendente - pending
//resolvida - resolved
//rejeitada - rejected

function execute () {
    return new Promise ((resolve, reject) => {
        console.log(`A promisse esta sendo executada...`)
        setTimeout(() => {
            console.log(`Resolvendo a promise...`)
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000)



