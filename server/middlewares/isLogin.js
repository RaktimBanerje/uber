const jwt = require("jsonwebtoken")

const isLogin = async function (req, res, next) {
    
    let token = req.body.token

    const authHeader = req.headers['authorization']
    
    if(!token && authHeader) {
        token = authHeader.split(' ')[1]
    }

    try {
        const decode = jwt.verify(token, "secret")
        if(decode){
            req.user = decode
            next()
        }    
    }
    catch(err) {
        return res.status(401).send()
    }

}

module.exports = isLogin