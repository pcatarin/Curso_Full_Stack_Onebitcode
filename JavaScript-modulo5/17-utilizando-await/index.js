//Um outro recurso muito útil das funções async é o await. Ele é uma palavra reservada do javascript que nos permite esperar pela execução de uma promise dentro de uma função async, ou seja, se nossa função async depende de uma outra promise, podemos esperar pela sua execução de forma “limpa” sem utilizar o .then(). Para usar o await basta colocá-lo antes da chamada da função assíncrona:

//E nós ainda podemos tratar as rejeições dentro de um bloco try catch convencional:

async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments sum must be of type number')
    }
    return a + b
}

// async function execute () {
//     asyncSum(53,30).then(result => {
//         console.log(result)
//     })
// }

async function execute () {
    try {
        const result = await asyncSum(50,'tex')
        console.log(result)
    } catch (err) {
        console.log(err)
    }
    
}

execute()