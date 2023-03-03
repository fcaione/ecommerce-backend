const Router = require('express').Router()
const controller = require('../controllers/ListingController')

Router.get('/', controller.findAllListings)
Router.get('/:listingId', controller.findListingByPk)
Router.put("/:listingId", controller.updateListing)
Router.delete("/:listingId", controller.deleteListing)

module.exports = Router;