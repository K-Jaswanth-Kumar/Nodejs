const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Mongodb connection succesfull")
    } catch (e) {
        console.log(e)
    }
}

module.exports = connectDB