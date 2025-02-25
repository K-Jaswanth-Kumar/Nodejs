const fs = require('fs')
const path = require('path')

const dataFolder = path.join(__dirname,'data');

// Sync way of creating dir, file, writing in file, reading the file and appending

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Data Folder Created")
}

const filePath = path.join(dataFolder,'example.txt')

fs.writeFileSync(filePath,"Hello from Nodejs")
console.log("file created successfully")

const read = fs.readFileSync(filePath,"utf-8")
console.log(read)

fs.appendFileSync(filePath,"\nThis a new line added to the file")
console.log("new file content added")

// Async way of file, writing in file, reading the file and appending
const asyncFilePath = path.join(dataFolder,"asyncExample.txt")

fs.writeFile(asyncFilePath,"Hello async Nodejs",(err)=>{
    if(err) throw err;
    console.log("Async file is created successfully")

    fs.readFile(asyncFilePath,"utf-8",(err,data)=>{
        if(err) throw err;
        console.log("Async file content:",data)

        fs.appendFile(asyncFilePath,"\nNew file for async aswell",(err)=>{
            if(err) throw err;
            console.log("New line added toAsync file")

            fs.readFile(asyncFilePath,"utf-8",(err,data)=>{
                if(err) throw err;
                console.log("Async file updated content:",data)
            })
        })
    })
})