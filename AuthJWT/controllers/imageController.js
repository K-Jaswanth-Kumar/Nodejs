const Image = require('../models/imageModel')
const { uploadToCloudinary } = require('../helper/cloudinaryHelper');
const fs = require('fs')
const cloudinary = require('../config/cloudinary')

// Upload image Controller
//@desc Upload Image
//@route POST /upload 
//@access Public
const uploadImage = async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"File is required"
            })
        }
        
        // upload to cloudinary
        const {url,publicId} = await uploadToCloudinary(req.file.path)

        // store in mongodb
        const newlyUpdatedImage = await Image.create({
            url,
            publicId,
            uploadedBy : req.userInfo.userID
        })

        // delete the file from local
        fs.unlinkSync(req.file.path)
        res.status(201).json({
            success:true,
            message:"Image has been uploaded",
            image:newlyUpdatedImage
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

// Get all images Controller
//@desc Get Images
//@route GET /image 
//@access Public
const fetchImageController = async(req,res)=>{
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 5
        const skip = (page-1)*limit

        const sortBy = req.query.sort || 'CreatedAt'
        const sortOrder = req.query.sortOrder==='asc'?1:-1
        const totalImage = await Image.countDocuments()
        const totalPages = Math.ceil(totalImage/limit)

        const sortObj = {}
        sortObj[sortBy] = sortOrder
        const images = await Image.find().sort(sortObj).skip(skip).limit(limit)
        if(images){
            res.status(200).json({
                sucess:true,
                message:"Images are fetched",
                currentPage:page,
                totalPages:totalImage,
                totalImages:totalImage,
                data:images
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

// Get all images Controller
//@desc Get Images
//@route GET /delete 
//@access Public  
const deleteImageController = async(req,res)=>{
    try {
        const imageId = req.params.id
        const userID = req.userInfo.userID

        const image = await Image.findById(imageId)

        if(!image){
            return res.status(404).json({
                success:false,
                message:"Image not found"
            })
        }

        if(image.uploadedBy.toString()!==userID){
            return res.status(403).json({
                success:false,
                message:"Unauthorized image action"
            })
        }

        await cloudinary.uploader.destroy(image.publicId)

        await Image.findByIdAndDelete(imageId)

        res.status(200).json({
            status:true,
            message:"Image deleted successfully"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}
module.exports = {
    uploadImage,
    fetchImageController,
    deleteImageController
}