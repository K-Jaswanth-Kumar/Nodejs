console.log("Module Wrapper working")

// console.log("exports:",exports);
// console.log("require:",require);
// console.log("module:",module);
console.log("__filename:",__filename);
console.log("__dirname:",__dirname);

module.exports.greet = () => {
    console.log("Demo")
}