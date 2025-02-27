const express = require('express')
const {uploadImage,fetchImageController,deleteImageController} = require('../controllers/imageController')
const authMiddleware = require('../middleware/authMiddleware')
const isAdminUser = require('../middleware/adminMiddleware')
const uploadMiddleware = require('../middleware/uploadMiddleware')
const router = express.Router()


router.post('/upload',authMiddleware,isAdminUser,uploadMiddleware.single('image'),uploadImage)
router.get('/image',authMiddleware,fetchImageController)
router.delete('/delete/:id',authMiddleware,isAdminUser,deleteImageController)

module.exports = router