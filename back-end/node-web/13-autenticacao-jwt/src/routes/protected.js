const express = require('express')
const authMiddleware = require('../middleware/auth=middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticateduser.username
    res.json({ message: `Você está na area protegida. Bem-vindo(a) ${username}`})
})

module.exports = protectedRouter