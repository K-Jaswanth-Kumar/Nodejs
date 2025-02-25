// Using exports and require
let {add,substract,multiply,divide} = require('./module.js');

console.log(add(1,2))
console.log(substract(1,2))
console.log(multiply(1,2))
try{
    console.log("error")
    let x = divide(1,0)
    console.log(x)
} catch(error){console.log(error.message)}


// // Module Wrapper 
// (
//     function (exports,require,module,__filename,__dirname){
//         // The module code goes here
//     }
// )