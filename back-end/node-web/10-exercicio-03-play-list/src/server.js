const express = require('express')
const controllerPlaylists = require('./controllers/controller-playlists')

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.json({
        name: "Playlist Music",
        message: "Bem vindo"
    })
})

app.get('/playlists', controllerPlaylists.allPlayLists)
app.post('/playlists', controllerPlaylists.addPlayList)

app.get('/playlists/:id', controllerPlaylists.show)
app.post('/playlists/:id/musics', controllerPlaylists.addMusic)
app.put('/playlists/:id', controllerPlaylists.updatePlayList)

app.delete('/playlists/:id/musics', controllerPlaylists.removeMusic)
app.delete('/playlists/:id', controllerPlaylists.deletePlayList)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em: http://localhost:${PORT}`))





