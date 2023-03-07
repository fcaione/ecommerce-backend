const Router = require('express').Router()
const controller = require('../controllers/ListingController')
const middleware = require('../middleware')

Router.get('/', controller.findAllListings)
Router.post("/", 
middleware.stripToken,
middleware.verifyToken,
controller.createListing)
Router.get('/:listingId', controller.findListingByPk)
Router.put("/:listingId",
middleware.stripToken,
middleware.verifyToken, 
controller.updateListing)
Router.delete("/:listingId", 
middleware.stripToken,
middleware.verifyToken,
controller.deleteListing)

module.exports = Router;