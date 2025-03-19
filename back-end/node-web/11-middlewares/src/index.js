const express = require('express')
const uploadMiddlewares = require('./middlewares/upload-middleware')
//const middlewareC = require('./middlewares/middleware-c')

const app = express()

app.use(express.static('public'))

app.post('/upload',uploadMiddlewares.single('image'), (req, res) => {
    console.log(req.file, req.body)
    res.json({ message: 'Arquivo Salvo com sucesso!'})
})
/*
app.use(middlewareC)

app.use(function (req, res, next) {
    console.log('Executando middleware A')
    req.middlewareA = 'OK!'
    next()
})

function middlewareB (req, res, next) {
    console.log('Executando middleware B')
    req.middlewareB = 'OK!'
    next()
}

app.get('/testeA', (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB })
    throw new Error ('Algo deu muito errado aqui')
    res.end()
})

app.get('/testeB', middlewareB, (req, res) => {
    //console.log('Executando middleware B')
    console.log({ a: req.middlewareA, b: req.middlewareB })
    res.end()
})

//está é a maneira para lidar com erros da maneira genérica no express
app.use(function (err, req, res, next) {
    if (err) {
        console.log(err.message)
        res.status(400)
        res.json({ message: err.message })
    } else {
        next()
    }
})
*/

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em: http://localhost:${PORT}`))