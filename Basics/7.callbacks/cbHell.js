const fs = require('fs')

fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){ 
        console.log(err)
        return
    }
    console.log("Input.txt:",data)
    const modifyFileData = data.toUpperCase()
    fs.writeFile('output.txt',modifyFileData,(err)=>{
        if(err){ 
            console.log(err)
            return
        } 
        console.log("Data written to output.txt")
        fs.readFile('output.txt','utf-8',(err,data)=>{
            if(err){ 
                console.log(err)
                return
            }
            console.log("output.txt:",data)
        })
    })
})