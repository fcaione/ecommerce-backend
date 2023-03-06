const { Comment } = require("../models")
const stringify = require("../utils")

const createComment = async (req, res) => {
	const { listingId, userId } = req.params
	try {
		const commentBody = {
			listingId,
			userId,
			...req.body,
		}
		const comment = await Comment.create(commentBody)
		res.status(200).send(comment)
	} catch (error) {
		res.status(401).send(error)
	}
}

const deleteComment = async (req, res) => {
	const { commentId } = req.params
	try {
		await Comment.destroy({
            where: {
                id: commentId
            }
        })
		res.status(200).send(`comment ${commentId} oblitered`)
	} catch (error) {
		res.status(401).send(error)
	}
}

module.exports = {
	createComment,
    deleteComment,
}
