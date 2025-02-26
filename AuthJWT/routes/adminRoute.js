const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const isAdminUser = require('../middleware/adminMiddleware')

//@desc Admin page
//@route GET /home
//@access Public
router.get('/admin',authMiddleware, isAdminUser,(req,res)=>{
    const {username, userId, role} = req.userInfo
    res.json({
        message:`Welcome to Admin page ${username}`
    }) 
})

module.exports = router