const express = require('express')

const server = express()

//este é o método para criar uma rota no servidor, o primeiro parametro é caminho e o segundo é o callback que recebe a requisição e devolve uma resposta.
server.get('/', (request,response) =>{
    //para enviar uma resposta do servidor usamos o 'response.send' e o corpo da resposta
    response.send('Servidor Express iniciado!\nVocê está na página inicial agora.')
})

server.get('/artigos', (req, res) => {
    res.send('Você está na página de artigos agora.')
})

const PORT = 3000

//dessa maneira iniciamos o servidor
server.listen(PORT, () => {console.log(`Servidor iniciado em http://localhost:${PORT}`)})