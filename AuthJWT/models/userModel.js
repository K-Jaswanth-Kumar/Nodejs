const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {
        type:String,
        required: [true,'Please enter username'],
        unique:true,
        trim:true
    },
    email : {
        type:String,
        required: [true,'Please enter email'],
        unique:true,
        trim:true,
        lowercase:true
    },
    password : {
        type:String,
        required: [true,'Please enter password']
    },role :{
        type : String,
        enum : ['user','admin'],
        default: 'user'
    }
},{timestamps : true})

module.exports = mongoose.model('User',UserSchema)