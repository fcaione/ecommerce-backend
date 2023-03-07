const { Listing, Comment, User } = require("../models")
const stringify = require("../utils")

const findAllListings = async (req, res) => {
    try {
        const listing = await Listing.findAll()
		res.status(200).send(listing)
    } catch (error) {
		res.status(401).send(error)
    }
}

const findListingByPk = async (req, res) => {
	const { listingId } = req.params
	try {
		const listing = await Listing.findByPk(listingId, {
			include: [
                { model: Comment, as: "comments" },
                { model: User, as: "owner"}
            ],
		})
		res.status(200).send(listing)
	} catch (error) {
		res.status(401).send(error)
	}
}

const createListing = async (req, res) => {
    const { userId } = req.params
    try {
        const listingBody = {
            userId,
            ...req.body
        }
        const listing = await Listing.create(listingBody)
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
    deleteListing,
    createListing
}