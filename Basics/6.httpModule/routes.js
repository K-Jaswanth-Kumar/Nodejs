const http = require("http")

const server = http.createServer((req,res)=>{
    const url = req.url
    if(url==='/'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end("You are at home page")
    } else if(url==='/projects'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end("You are at projects")
    } else{
        res.writeHead(404,{'Content-type':'text/plain'})
        res.end("Page not found")
    }
})

const port = 3000

server.listen(port,console.log(`Server is now listening in ${port}`))