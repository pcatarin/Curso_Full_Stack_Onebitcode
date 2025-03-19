//const { users } = require("./dashboard-controller")
const users = require("../models/users")

module.exports = {
// GET /auth
index: (req, res) => {
    res.render('index')
},

// POST /auth/register
register: (req, res) => {
    const { username, password } = req.body

    const userAlreadyExists = users.find(user => user.username === username)
    if (userAlreadyExists) {
        return res.status(400).redirect('/')
    }

    const newUser = { username, password, role: 'Standard' }
    users.push(newUser)

    //estes são os parametros que usamos para controlar a sessão
    req.session.authenticated = true
    req.session.currentUser = newUser

    res.redirect('/dashboard')
},

// POST /auth/login
login: (req, res) => {
    const { username, password } = req.body

    const user = users.find(user => user.username === username)

    if (!user) {
        return res.redirect('/')
    }

    if (password !== user.password) {
        return res.redirect('/')
    }

    //estes são os parametros que usamos para controlar a sessão
    req.session.authenticated = true
    req.session.currentUser = user

    res.redirect('/dashboard')
},

// GET /auth/logout
logout: (req, res) => {
    req.session.authenticated = false
    req.session.currentUser = null
    res.redirect('/')
}
}