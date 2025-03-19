const http = require('node:http')

const server = http.createServer((request,response) => {
    const path = request.url

    switch(path) {
        case '/':
            response.writeHead(200)
            response.write('Você está na página inicial!',  (response='utf-8') => {
                return response
            })
            break
        case '/artigos':
            response.writeHead(200)
            response.write('Você está na página de artigos!', () => {
                console.log('Complete')
            })
            break
        default:
            response.writeHead(404)
            response.write('Caminho não Encontrado!')
            break
    }

    response.end()
    // console.log(request)
    // response.writeHead(200)
    // response.write('Servidor HTTP em Node.js funcionando!')
    // response.end()
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})