const { Tag, Listing } = require("../models")
const stringify = require("../utils")

const getTag = async (req, res) => {
  try {
      const tag = await Tag.findAll({
        where: { content: req.params.tagName },
        include: [{ model: Listing, as: 'listingsTags' }],
      })
  res.status(200).send(tag)
  } catch (error) {
  res.status(401).send(error)
  }
}

const createTag = async (req, res) => {
  const { listingId } = req.params
  try {
    const tagBody = {
      listingId,
      ...req.body,
    }
    const tag = await Tag.create(tagBody)
    res.status(200).send(tag)
  } catch (error) {
    res.status(401).send(error)
  }
}

const deleteTag = async (req, res) => {
  const { tagName, listingId } = req.params
  try {
    await Tag.destroy({
      where: {
        listingId: listingId,
        content: tagName
      }
    })
    res.status(200).send(`tag ${tagName} oblitered`)
  } catch (error) {
    res.status(401).send(error)
  }
}

module.exports = {
  createTag,
  deleteTag,
  getTag
}
