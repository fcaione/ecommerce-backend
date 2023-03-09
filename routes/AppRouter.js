const Router = require('express').Router()
const CommentRouter = require('./CommentRouter')
const UserRouter = require('./UserRouter')
const ListingRouter = require('./ListingRouter')
const TagRouter = require('./TagRouter')

Router.use('/users', UserRouter)
Router.use('/comments', CommentRouter)
Router.use('/listings', ListingRouter)
Router.use('/tags', TagRouter)

module.exports = Router;