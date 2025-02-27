const express = require('express')
const {registerUser,loginUser,changePassword} = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()



router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/update',authMiddleware,changePassword)

module.exports = router