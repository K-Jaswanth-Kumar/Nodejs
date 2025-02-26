const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type:String,
        required : [true,'Book title is required'],
        trim:true,
        maxLength: [100,'Book title cannot exceed 100 words']
    },
    author : {
        type:String,
        required : [true,'Author name is required'],
        trim:true,
    },
    year : {
        type:Number,
        required: [true,'Publication year is required'],
        min: [1000,'Year must be atleast 1000 years old'],
        max: [new Date().getFullYear(),'Year Cannot have future publications']
    },
    createdAt :{
        type: Date,
        default: Date.now,
    }

})

module.exports = mongoose.model('Book',bookSchema) 