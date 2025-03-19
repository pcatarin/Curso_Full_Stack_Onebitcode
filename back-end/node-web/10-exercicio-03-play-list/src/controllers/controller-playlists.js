let playLists = [
    { 
        id: 1, 
        name: 'Alternativas', 
        tags: ['Rock', 'Pop', 'Dance'],
        musics: [
            { title: "Someday", year: 2003, artist: "Nickel Back", albun: "The long Road" },
            { title: "Payphone", year: 2012, artist: "Maroom 5", albun: "Overexposed" },
            { title: "Alone", year: 2001, artist: "Lasgo", albun: "Some Things" }
        ]
    },
    { 
        id: 2, 
        name: 'Nacionais', 
        tags: ['Rock', 'Pop', 'Sertanejo'],
        musics: [
            { title: "Olhos Certos", year: 2002, artist: "Detonautas", albun: "Detonautas Roque Club" },
            { title: "Mulher Segura", year: 2023, artist: "Luan Santana", albun: "Luan City 2.2 (Ao vivo)" },
            { title: "Seu Perfil", year: 2022, artist: "Henrique e Juliano", albun: "Manifesto Musical" }
        ]
    }
]

module.exports = {
    // GET /playlists
    allPlayLists: (req, res) => {
        res.json(playLists)
    },
    // POST /playlists
    addPlayList: (req, res) => {
        const { name, tags=[], musics=[] } = req.body

        const newPlayList = {
            id: Math.floor(Math.random()* 9999),
            name,
            tags,
            musics
        }
        const nameExist = playLists.findIndex(list => list.name === name)

        if (typeof name !== 'string' || name === '') {
            return res.status(404).json({ message: 'Invalid Name'})
        } 

        if (nameExist === -1) {
            playLists.push(newPlayList)
        } else {
            return res.status(400).json({ message: 'Name its Existing!'})
        }

        res.json(newPlayList)
    },

    // GET /playlists/:id
    show: (req, res) => {
        const { id } = req.params

        const playListIndex = playLists.findIndex(list => list.id === +id)

        if (playListIndex === -1) {
            return res.status(404).json({ message: "Playlist Not Found!"})
        }

        res.json(playLists[playListIndex])
    },

    // PUT /playlists/:id //name e tags
    updatePlayList: (req, res) => {
        const { id } = req.params
        const { name, tags } = req.body

        const playListId = playLists.findIndex(list => list.id === +id)

        if (playListId === -1) {
            return res.status(404).json({ message: 'Playlist Not Found!'})
        }
        if (typeof name === 'string') {
            playLists[playListId].name = name
        }
        if (typeof tags === 'string') {
             playLists[playListId].tags.push(tags)
        } 
        
        
        

        res.json(playLists[playListId])
    },
    
    // POST /playlists/:id/musics
    addMusic: (req, res) => {
        const { id } = req.params
        const { title, year, artist, albun } = req.body

        const newMusic = {
            title,
            year,
            artist,
            albun
        }

        const playListIndex = playLists.findIndex(list => list.id === +id)
        
        if (playListIndex === -1) {
            return res.status(404).json({ message: 'Playlist Not Found!' })
        }

        const musicTitle = playLists[playListIndex].musics.findIndex(music => music.title === newMusic.title)

        if (musicTitle !== -1) {
            return res.status(400).json({ message: 'Music Already Exists!'})
        }
        if (typeof newMusic.title === 'string' || typeof newMusic.albun === 'string' || typeof newMusic.artist === 'string' || typeof newMusic.year === 'number') {
            playLists[playListIndex].musics.push(newMusic)
        }

        res.json(playLists[playListIndex])
    },

    // DELETE /playlists/:id/musics/:title
    removeMusic: (req, res) => {
        const { id } = req.params
        const { title } = req.body

        const playListIndex = playLists.findIndex(list => list.id === +id)

        const musicIndex = playLists[playListIndex].musics.findIndex(iten => iten.title === title)

        if (playListIndex === -1) {
            return res.status(404).json({ message: 'Playlist Not Found!'})
        }
        if (musicIndex === -1) {
            return res.status(404).json({ message: 'Music Not Found!'})
        }

        playLists[playListIndex].musics = playLists[playListIndex].musics.filter(music => music.title !== title)
        res.status(200).json(playLists[playListIndex])
    },

    // DELETE /playlists/:id
    deletePlayList: (req, res) => {
        const { id } = req.params

        const playListIndex = playLists.findIndex(list => list.id === +id)

        if (playListIndex === -1) {
            return res.status(404).json({ message: 'Playlist Not Found!'})
        }
        playLists = playLists.filter(lists => lists.id !== +id)
        res.status(204).end()
    } 
}