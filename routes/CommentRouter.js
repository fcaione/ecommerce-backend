const Router = require('express').Router()
const controller = require("../controllers/CommentController")

Router.get('/:listing_id', controller.findAllCommentsforListing)
Router.post("/:listing_id/:user_id", controller.createComment)

module.exports = Router;