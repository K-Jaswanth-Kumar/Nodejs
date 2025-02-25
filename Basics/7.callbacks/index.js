const fs = require('fs')

function person(name, callbackFn){
    console.log(name)
    callbackFn()
}

function address(){
    console.log("Vizag")
}

person("js",address)

fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err) console.log(err)
    console.log("data:",data)
})