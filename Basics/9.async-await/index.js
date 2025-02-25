function delayFn(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}

async function delayedGreet(name){
    await delayFn(2000)
    console.log(name)
}

delayedGreet("Jaswanth")

async function division(a,b) {
    try{
        if(b===0){
            throw new Error("Cannot divide by zero ya dimwit")
        }
        return a/b
    } catch(err){
        console.log("error:",err)
        return null;
    }
}

async function mainFn(){
    console.log(await division(10,0))
}

mainFn()