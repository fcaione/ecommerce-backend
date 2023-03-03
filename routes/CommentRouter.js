const Router = require('express').Router()
const controller = require("../controllers/CommentController")

Router.post("/:listingId/:userId", controller.createComment)
Router.delete("/:commentId", controller.deleteComment)

module.exports = Router;