const { Listing, Comment } = require("../models")
const stringify = require("../utils")

const findAllListings = async (req, res) => {
    try {
        const listing = await Listing.findAll()
        stringify(listing)
		res.status(200).send(listing)
    } catch (error) {
		res.status(401).send(error)
    }
}

//find listings only of followers?

const findListingByPk = async (req, res) => {
	const { listingId } = req.params
	try {
		const listing = await Listing.findByPk(listingId, {
			include: [{ model: Comment, as: "comments" }],
		})
        stringify(listing)
		res.status(200).send(listing)
	} catch (error) {
		res.status(401).send(error)
	}
}

const updateListing = async (req, res) => {
    const { listingId } = req.params
    try {
        const listing = await Listing.update(req.body, {
            where: {
                id: listingId
            },
            returning: true
        })
        res.status(200).send(listing)
    } catch (error) {
		res.status(401).send(error)
    }
}

const deleteListing = async (req, res) => {
    const { listingId } = req.params
    try {
        await Listing.destroy({
            where: {
                id: listingId
            },
        })
        res.status(200).send(`listing ${listingId} obliterated`)
    } catch (error) {
		res.status(401).send(error)
    }
}

module.exports = {
    findListingByPk,
    updateListing,
    findAllListings,
    deleteListing
}