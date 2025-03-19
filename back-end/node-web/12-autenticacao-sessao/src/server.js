const express = require('express') 
const path = require('node:path')
const router = require('./routes')
const session = require('express-session')

const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'Palavra-chave-secreta', //ncrbryb6wfb6g67feg67gr52rff75e3
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(router)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))