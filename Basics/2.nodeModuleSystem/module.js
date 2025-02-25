function add(a,b){
    return a+b;
}

function substract(a,b){
    return a>b?a-b:b-a;
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b!=0){return a/b}
    throw new Error("Can't divide with zero")
}

module.exports = {
    add,
    substract,
    multiply,
    divide
}