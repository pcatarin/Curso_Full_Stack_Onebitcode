const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

//configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configuração para arquivos estáticos
app.use(express.static('public'))

//configuração para a leitura de dados do formulário do HTML da requisição
app.use(express.urlencoded({ extended: true }))

//configuração das rotas da aplicação
app.use(router)

//para usarmos a PORT de maneira estática, usamos as variaveis de hambiente da maneira abaixo
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em: http://localhost:${PORT}`))