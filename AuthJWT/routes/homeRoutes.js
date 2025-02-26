const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')


//@desc Home page
//@route GET /home
//@access Public
router.get('/home',authMiddleware,(req,res)=>{
    const {username} = req.userInfo
    res.json({
        message:`Welcome to Home page ${username}`
    }) 
})

module.exports = router