const authMiddleware = (req, res, next) => {
    if (req.session.authenticated) {
        next()
    } else {
        res.redirect('/')
    }
}

const ensureUserIsAdmin = (req, res, next) => {
    if (req.session.currentUser.role !== 'Admin') {
        return res.redirect('/dashboard')
    } else {
        next()
    }
}

module.exports = { 
    authMiddleware,
    ensureUserIsAdmin
}