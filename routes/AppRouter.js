const Router = require('express').Router()
const CommentRouter = require('./CommentRouter')
const UserRouter = require('./UserRouter')
const ListingRouter = require('./ListingRouter')

Router.use('/users', UserRouter)
Router.use('/comments', CommentRouter)
Router.use('/listings', ListingRouter)

module.exports = Router;