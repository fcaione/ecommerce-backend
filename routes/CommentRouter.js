const Router = require('express').Router()
const controller = require("../controllers/CommentController")
const middleware = require('../middleware')

Router.post("/:listingId/:userId", 
middleware.stripToken,
middleware.verifyToken,
controller.createComment)
Router.delete("/:commentId",
middleware.stripToken,
middleware.verifyToken,
controller.deleteComment)

module.exports = Router;