const express = require('express')
const path = require('node:path')


const app = express()

const storedUsers = []

//método set define algumas configurções padrões, 'view engine' é a definição de qual engine vamos usar nesse servidor.
app.set('view engine', 'ejs')

//está é a definição do caminho para a pasta do ejs, usamos a biblioteca do node:path, para facilitar a especificação do caminho.
app.set('views', path.join(__dirname, 'views'))

//configuração do body para uso no HTML
app.use(express.urlencoded({ extended: true }))

//assim usando o ejs, podemos mandar variaveis para nossa página de forma dinâmica
app.get('/', (req, res) => {
    const title = 'Homepage'
    const message = 'Mensagem dinâmica inserida pelo EJS'

    //Esse é o método para disponilizarmos variaveis para uso no 'EJS', usamos o '.render' na response, e o primeiro parâmetro é qual arquivo queremos renderizar e o segundo parâmetro é o objeto com as variáveis que queremos usar no arquivo 'EJS'.
    res.render('index', { title, message })
})

app.get('/formulario', (req, res) => {
    res.render('form')
})

app.post('/register', (req, res) => {
    const userName = req.body.username 
    const password = req.body.password

    storedUsers.push({ userName, password })
    
    res.redirect('/usuarios')
})

app.get('/usuarios', (req, res) => {
    res.render('users', { users: storedUsers })
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor Iniciado em http://localhost:${PORT}`))