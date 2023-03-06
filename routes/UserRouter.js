const Router = require('express').Router()
const controllers = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/:user_id', 
middleware.stripToken,
middleware.verifyToken,
controllers.findUserByPk)
Router.post('/', controllers.register)
Router.post('/login', controllers.signIn)

module.exports = Router;