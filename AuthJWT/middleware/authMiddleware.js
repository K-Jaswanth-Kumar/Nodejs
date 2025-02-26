const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../config')

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Access Denied. No token found"
        })
    }

    // Decode this token
    try {
        const decodeWebToken = jwt.verify(token,JWT_SECRET_KEY)
        console.log(decodeWebToken)
        req.userInfo = decodeWebToken
        next()
    } catch (e) {
        return res.status(500).json({
            success:false,
            message:"Access Denied. Token expire"
        }) 
    }
    
}

module.exports = authMiddleware