const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("req:",req)
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end("Hello from Nodejs")
})

const port = 3000

server.listen(port,console.log(`Server is now listening in ${port}`))