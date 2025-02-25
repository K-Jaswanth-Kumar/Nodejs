const express = require('express')
const app = express()

const myMiddleware = (req,res,next)=>{
    console.log('this first middleware before every route')

    next()
}

app.use(myMiddleware)

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