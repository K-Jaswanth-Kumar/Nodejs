const express = require('express')
const {PORT} = require('./config')
const connectToDB = require('./db/db')
const productRouter = require('./routes/productRoutes')
const bookRouter = require('./routes/bookRoutes')
const app = express()

connectToDB()
app.use(express.json())
app.use('/products',productRouter)
app.use('/',bookRouter)



app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})