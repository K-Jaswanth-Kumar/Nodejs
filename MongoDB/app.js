const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://jaswanthfic:jaswanthfic@cluster0.lr6ck.mongodb.net/"
)
.then(()=> console.log("Connected to database"))
.catch((err)=>console.log("Error :",err))

// Create user schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt: {type:Date,default:Date.now}
})

// Create user model
const User = mongoose.model('User',userSchema)

async function runQueries() {
    try {
        // // Create a new document
        const newUser = await User.create({
            name:"Update",
            email:"Update@gmail.com",
            age:1000 ,
            isActive:false,
            tags:['Delete'],
        })
        
        console.log("Created new User",newUser)

        // // Get all Users
        // const allUsers = await User.find({})

        // console.log("All User",allUsers)

        // // Condition getting Users
        // const notActiveUsers = await User.find({isActive:false})
        // console.log("Not Active Users",notActiveUsers)

        // // Condition getting Users
        // const firstActiveUsers = await User.findOne({isActive:true})
        // console.log("Active Users",firstActiveUsers)

        // const getLastCreatedUserbyUserID = await User.findById(newUser.id)

        // console.log(getLastCreatedUserbyUserID)

        // // Getting specifc variables
        // const selectedFields = await User.find().select('name email -_id')
        // console.log(selectedFields)

        // // Get docs with limit and skip a few begining ones
        // const limitedUser = await User.find().limit(3).skip(1)
        // console.log(limitedUser)

        // // Sort
        // const sortedUser = await User.find().sort({age:-1})
        // console.log(sortedUser)

        // // Count docs
        // const countDocs = await User.countDocuments({isActive:false})
        // console.log(countDocs)

        // // Delete User
        // const deleteUser = await User.findByIdAndDelete(newUser.id)
        // console.log("Deleted User",deleteUser)

        // Update User
        const updateUser = await User.findByIdAndUpdate(newUser.id,{
            $set : {age:0},$push : {tags : 'updated'}
        },{new:true})

        console.log(updateUser)
    } catch (error) {
        console.log(error)
    } finally{
        await mongoose.connection.close()
    }
}

runQueries()