const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../config/config')
// Register Controller
//@desc Register User
//@route POST /api/auth/register 
//@access Public
const registerUser = async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
      
      // 1) Use findOne so you get either a user document or null
      const userExists = await User.findOne({
        $or: [{ username }, { email }],
      });
  
      // 2) if-else chain to send exactly one response
      if (userExists) {
        // If a user doc is found, userExists is not null
        // => send error
        res.status(400).json({
          success: false,
          message: "User exists with same username or email",
        });
      } else {
        // If no user is found, userExists is null => proceed
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
  
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
          role: role || "user",
        });
  
        if (newUser) {
          res.status(201).json({
            success: true,
            message: "User created",
            data: newUser,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Unable to create user",
          });
        }
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occurred",
      });
    }
  };
  
// Login controller
//@desc Login User
//@route POST /api/auth/login 
//@access Public
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const userExists = await User.findOne({ username });

        // Check if user exists
        if (!userExists) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Check if the password is correct
        const isPasswordMatching = await bcrypt.compare(password, userExists.password);

        if (!isPasswordMatching) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Create user token
        const accessToken = jwt.sign(
            {
                userID: userExists._id,
                username: userExists.username,
                role: userExists.role
            },
            JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        // Send response
        res.status(200).json({
            success: true,
            message: "Login Success",
            accessToken: accessToken
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occurred"
        });
    }
};


// Change password
//@desc Update Password
//@route PUT /update 
//@access Public
const changePassword = async (req,res) =>{
  try {
    const userId = req.userInfo.userID
    // console.log(userId)
    const {oldPasword,newPassword} = req.body

    const user = await User.findById(userId)

    if(!user){
      return res.status(400).json({
        success:false,
        message:"User not found"
      })
    }

    // if password is correct
    const isPasswordMatching = await bcrypt.compare(oldPasword,user.password)

    if(!isPasswordMatching){
      return res.status(400).json({
        success:false,
        message:"Password not matching"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword
    await user.save()

    res.status(200).json({
      success:true,
      message:"Passoword updated"
    })
  } catch (e) {
    console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occurred"
        });
  }
}

module.exports = {
    loginUser,
    registerUser,
    changePassword
}