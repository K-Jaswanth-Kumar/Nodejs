const {PORT} = require('./config')
const express = require('express')
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/bookRoutes')
const app = express()

// Connect to DB
connectToDB()

// Middlware
app.use(express.json());

// Routes
app.use('/api/books',bookRoutes)

app.listen(PORT || 3000,()=>{
    console.log(`Server is now running at ${PORT}`)
})

