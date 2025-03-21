const express = require('express')
const gamesController = require('./controllers/games-controller')

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.json({
        name: 'Paulo',
        age: 42
    })
})

app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)

app.post('/games', gamesController.save)
app.post('/games/:id/genres', gamesController.addGenre)

app.put('/games/:id', gamesController.update)
app.delete('/games/:id', gamesController.delete)
app.delete('/games/:id/genres/:name', gamesController.removeGenre)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em: http://localhost:${PORT}`))