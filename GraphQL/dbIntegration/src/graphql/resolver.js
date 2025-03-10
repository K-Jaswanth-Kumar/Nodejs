const Product = require('../models/Product')
const products =  require('../models/Product')

const resolvers = {
    Query : {
        products:async()=>await products.find({}),
        product:async(_,{id})=> await products.findById(id)
    },
    Mutation : {
        createProduct: async (_, args) => {
            const newlyCreatedProduct = new Product(args);
      
            return await newlyCreatedProduct.save();
          },      
        deleteProduct:async(_,{id})=>{
            return !!(await Product.findByIdAndDelete(id))
        },
        updateProduct:async(_,{id,...updates})=>{
            return await Product.findByIdAndUpdate(id,updates,{new:true})
        }
    }
    
}

module.exports = resolvers