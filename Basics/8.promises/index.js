// function delayFn(time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,time)
//     })
// }

// console.log("Promise starts ")
// delayFn(2000).then(()=>console.log("Resolved after 2 seconds"))

// console.log("end")

function divide(a,b){
    return new Promise((resolve,reject)=>{
        if(b==0){
            reject('Cannot divide with 0')
        }else{
            resolve(a/b)
        }
    })
}

divide(10,0).then(
    result=> console.log(result)
).catch(
    err=>console.log(err)
)