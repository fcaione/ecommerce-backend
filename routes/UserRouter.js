const Router = require('express').Router()
const controllers = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/user/:user_id',
controllers.findUserByPk)
Router.post('/', controllers.register)
Router.post('/login', controllers.signIn)
Router.get('/session', 
middleware.stripToken,
middleware.verifyToken,
controllers.checkSession)
Router.put('/update', 
middleware.stripToken,
middleware.verifyToken,
controllers.updateUser)

module.exports = Router;