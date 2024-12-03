function execute () {
    return new Promise ((resolve, reject) => {
        console.log(`A promisse esta sendo executada...`)
        setTimeout(() => {
            if (false) {
                reject(false)
            } else {
                console.log(`Resolvendo a promise...`)
                resolve(50)
            }
            
        }, 2000)
    })
}

execute().then((result) => {
    console.log(`A promisse foi resolvida. O resultado é: ${result}`)
}).catch((err) => {
    console.log(`A promisse foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log(`A promisse foi finalizada!!!`)
})