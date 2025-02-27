const express = require('express')
const connectToDB = require('./database/db')
const {PORT} = require('./config/config')
const authRoutes = require('./routes/authRoutes')
const homeRoutes = require('./routes/homeRoutes')
const adminRoutes = require('./routes/adminRoute')
const imageRoutes = require('./routes/imageRoute')
const app = express()

app.use(express.json())
connectToDB()

app.use('',homeRoutes)
app.use('',adminRoutes)
app.use('',imageRoutes)
app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`)
})