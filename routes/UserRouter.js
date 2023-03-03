const Router = require('express').Router()
const controllers = require('../controllers/UserController')

Router.get('/:user_id', controllers.findUserByPk)
Router.post('/', controllers.register)
Router.post('/login', controllers.signIn)

module.exports = Router;