const express = require('express')
const app = express()

// For parsing json into the req.body
app.use(express.json())
//  For x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }));


let books = [
    {
        id:'1',
        title:'Sun Tzu Art of War'
    },
    {
        id:'2',
        title:'Clear'
    }
]

// @desc Intro 
// @route GET /
// @access public
app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to our bookstore api'
    })
})

// @desc Get all books 
// @route GET /books
// @access public
app.get('/books',(req,res)=>{
    res.json(books)
})

// @desc Get single books 
// @route GET /book/:id
// @access public
app.get('/book/:id',(req,res)=>{
    const id = req.params.id
    const book = books.find(x => x.id==id)
    res.status(book?200:404).json(book?book:"Enter a valid id bro")
})

// @desc Add a new book 
// @route POST /addbook
// @access public
app.post('/addbook',(req,res)=>{
    const { title } = req.body;

    // Validate input
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    console.log(title)
    const id = books.length+1
    books.push({id,title})
    res.status(200).json({
        message:`Book is added at id:${id}`
    })
})

// @desc Update a book
// @route PUT /updatebook
// @access public
app.put('/updatebook/:id',(req,res)=>{
    const id = req.params.id
    const { title } = req.body;
    const book = books.find(x => x.id==id)
    if(!book){
        res.status(404).json({
            message:"ID doensn't exist"
        })
    }

    // Validate input
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    console.log(title)
    books[id-1].title = title
    res.status(200).json({
        message:`Book is updated with title:${title}`
    })
})

// @desc Delete a book
// @route DELETE /delete
// @access public
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    const book = books.find(x => x.id==id)
    if(!book){
        res.status(404).json({
            message:"ID doensn't exist"
        })
    }

    books = books.filter(book => book.id !=id)
    res.status(200).json({
        message:`Book is deleted with :${id}`
    })
})



const port = 3000

app.listen(port,()=>{
    console.log(`Server is listrning at ${port}`)
})

