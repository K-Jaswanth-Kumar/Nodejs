const mongoose = require('mongoose')
const {DB_URL} = require('../config')

const connectToDB = async()=>{
    try {
        await mongoose.connect(DB_URL)
        console.log("DB connection successful")
    } catch (error) {
        console.log("Mongodb connection failed",error)
        process.exit(1)
    }
}

module.exports = connectToDB