const jwt = require("jsonwebtoken")
const driver = require("../models/driver")
const Driver = require("../models/driver")

const isLogin = async function (req, res, next) {
    const token = req.body.token
    try {
        const decode = jwt.verify(token, "secret")
        if(decode){
            req.user = await driver.findById(decode.id)
            next()
        }    
    }
    catch(err) {
        return res.status(401).send()
    }

}

module.exports = isLogin