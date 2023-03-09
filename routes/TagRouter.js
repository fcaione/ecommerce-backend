const Router = require('express').Router()
const controller = require("../controllers/TagController")
const middleware = require('../middleware')

Router.post("/:listingId", 
middleware.stripToken,
middleware.verifyToken,
controller.createTag)
Router.delete("/:tagName/:listingId",
middleware.stripToken,
middleware.verifyToken,
controller.deleteTag)
Router.get("/:tagName",
controller.getTag)

module.exports = Router;