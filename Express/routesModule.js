const express = require('express')

const app = express()

// Root route

app.get('/',(req,res)=>{
    res.send('Welcome to Home page')
})

// Get all products
app.get('/products',(req,res)=>{
    const products = [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
        { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true },
        { id: 3, name: "Headphones", price: 199.99, category: "Accessories", inStock: false },
        { id: 4, name: "Desk Chair", price: 149.99, category: "Furniture", inStock: true },
        { id: 5, name: "Coffee Maker", price: 79.99, category: "Appliances", inStock: true },
        { id: 6, name: "Backpack", price: 49.99, category: "Fashion", inStock: false },
        { id: 7, name: "Keyboard", price: 89.99, category: "Electronics", inStock: true },
        { id: 8, name: "Running Shoes", price: 129.99, category: "Sportswear", inStock: true }
    ];
    
    res.json(products)
    
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extract and convert ID

    const products = [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
        { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true },
        { id: 3, name: "Headphones", price: 199.99, category: "Accessories", inStock: false },
        { id: 4, name: "Desk Chair", price: 149.99, category: "Furniture", inStock: true },
        { id: 5, name: "Coffee Maker", price: 79.99, category: "Appliances", inStock: true },
        { id: 6, name: "Backpack", price: 49.99, category: "Fashion", inStock: false },
        { id: 7, name: "Keyboard", price: 89.99, category: "Electronics", inStock: true },
        { id: 8, name: "Running Shoes", price: 129.99, category: "Sportswear", inStock: true }
    ];

    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product); // Return the found product
    } else {
        res.status(404).send(`Product not found: ${id}`); // Proper 404 response
    }
});



const port = 3000

app.listen(3000,()=>{
    console.log(`Server is now running at port ${port}`)
})