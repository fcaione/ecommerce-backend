const Router = require('express').Router()
const controller = require('../controllers/ListingController')

Router.get('/:listingId', controller.findListingByPk)
Router.put("/:listingId", controller.updateListing)

module.exports = Router;