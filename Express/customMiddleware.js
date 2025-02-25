const express = require('express')
const app = express()

const requestTimeStampLogger = (req,res,next)=>{
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)

    next()
}

app.use(requestTimeStampLogger)
 
app.get('/',(req,res)=>{
    res.send('Welcome to Home page')
})
app.get('/about',(req,res)=>{
    res.send('Welcome to About page')
})

const port = 3000

app.listen(3000,()=>{
    console.log(`Server is now running at port ${port}`)
})
