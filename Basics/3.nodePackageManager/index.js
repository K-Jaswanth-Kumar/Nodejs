const lodash = require("lodash")

const names =["sangam", "john", "terry", "alex", "Imia"]
    
const capitalize = lodash.map(names, lodash.capitalize);


console.log(capitalize) ;