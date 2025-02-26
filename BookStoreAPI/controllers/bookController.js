const Book = require('../models/book')
//@desc Get all books
//@route GET /api/books/get
//@access Public
const getAllBooks = async(req,res) => {
    try {
        const getAllBooks = await Book.find()
        if(getAllBooks){
            res.status(200).json({
                success:true,
                message:"Books were found",
                getAllBooks
            })
        } else{
            res.status(404).json({
                success:false,
                message:"No books was found"
            })
        }
    } catch (error) {
        console.log("Error occured:",error)
    }
}
//@desc Get a single book
//@route GET /api/books/get/:id
//@access Public
const getSingleBookByID = async(req,res) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id).select('-_id')
        if(book){
            res.status(200).json({
                success:true,
                message:"Book was found",
                book
            })
        } else{
            res.status(404).json({
                success:false,
                message:"No books were found with the given id"
            })
        }
    } catch (error) {
        console.log("Error occured:",error)
        res.status(500).json({
            success:false,
            message:"Something went wrong please wait"
        })
    }
}
//@desc Add a new book
//@route POST /api/books/add
//@access Public
const addNewBook = async (req, res) => {
    try {
        const { title, author, year } = req.body;
        console.log(req.body)
        // ✅ Validate input before saving to the database
        if (!title || !author || !year) {
            return res.status(400).json({ message: "All fields (title, author, year) are required." });
        }

        const newBook = new Book({ title, author, year });
        await newBook.save();

        res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
//@desc Update existing book
//@route PUT /api/books/update/:id
//@access Public
const updateBook = async(req,res) => {
    try {
        const id = req.params.id
        const updatedFormData = req.body
        const updateBook = await Book.findByIdAndUpdate(id,updatedFormData,{
            new:true
        })

        if(!updateBook){
            res.status(404).json({
                success:false,
                message:"Book is not found",
            })
        }
        res.status(200).json({
            success:true,
            data:updateBook
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
//@desc Delete existing book
//@route DELETE /api/books/delete/:id
//@access Public
const deleteBook = async(req,res) => {
    try {
        const id = req.params.id
        console.log(id)
        const deleteBook = await Book.findByIdAndDelete(id)

        if(!deleteBook){
            res.status(404).json({
                success:false,
                message:"Book is not found",
            })
        }
        res.status(200).json({
            success:true,
            data:deleteBook
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

module.exports = {
    getAllBooks,
    getSingleBookByID,
    addNewBook,
    updateBook,
    deleteBook
}