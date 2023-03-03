const { Comment } = require("../models")
const stringify = require("../utils")

const findAllCommentsforListing = async (req, res) => {
	const { listingId } = req.params.listingId
	try {
		const comments = await Comment.findAll({
			include: [{ model: Comment, as: "listingComments" }],
			where: {
				listingId,
			},
		})
        stringify(comments)
		res.status(401).send(comments)
	} catch (error) {
		res.send(error)
	}
}

const createComment = async (req, res) => {
	const { listing_id, user_id } = req.params
	try {
		const commentBody = {
			listing_id,
			user_id,
			...req.body,
		}
		const comment = await Comment.create(commentBody)
        stringify(comment)
		res.status(401).send(comment)
	} catch (error) {
		res.status(401).send(error)
	}
}

module.exports = {
	findAllCommentsforListing,
	createComment,
}
