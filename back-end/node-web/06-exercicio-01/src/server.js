const express = require('express')
const path = require('node:path')

const app = express()

let storedEmails = []
const PORT = 3000

//definição para utilização do EJS
app.set('view engine', 'ejs')

//definição para vizualização das páginas
app.set('views', path.join(__dirname, 'views'))

//definição para pegar os dados de formulário do HTML
app.use(express.urlencoded({ extended: true }))

//definição para utilização dos arquivos CSS ou JS para o Front End
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/formulario', (req, res) => {
    res.render('form')
})

//no método post devemos relacionar com o nome da action no form
app.post('/save', (req, res) => {
    const userName = req.body.name 
    const email = req.body.email

    storedEmails.push({ userName, email })
    
    res.redirect('sucesso')
})

app.get('/sucesso', (req, res) => {
    res.render('sucess')
})

app.get('/emails', (req, res) => {
    res.render('emails', { emails: storedEmails })
})

app.post('/emails/delete', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    storedEmails = storedEmails.filter(item => item.userName !== name && item.email !== email)

    res.redirect('/emails')

    console.log(storedEmails)
})




app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))