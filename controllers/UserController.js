const { User, Listing } = require("../models")
const stringify = require("../utils")
const middleware = require('../middleware')

const findUserByPk = async (req, res) => {
    try{
        const userAndListings = await User.findByPk(req.params.user_id, {
            include: [{ model: Listing, as: 'listings' }]
          })
          res.send(userAndListings)
    } catch (error) {
        throw error
    }    
}

const register = async (req, res) => {
    try{
        const { email, password, name } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({ email, passwordDigest, name, rating: null })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const signIn = async (req, res) => {
    try{
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
          })
          let matched = await middleware.comparePassword(
            user.passwordDigest, 
            req.body.password
          )
          if(matched){
            let payload = {
              id: user.id,
              email: user.email
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
          }
          res.status(401).send({ status: 'Error', msg: 'Unauthorized' }) 
    } catch(error) {
        throw error
    }
}

const checkSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
  }
  

module.exports = {
    findUserByPk,
    register,
    signIn,
    checkSession
}