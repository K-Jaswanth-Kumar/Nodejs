const Author = require('../models/authorModel')
const Book = require('../models/bookModel')

const createAuthor = async(req,res)=>{
    try {
        const author = await Author.create(req.body)
        res.status(201).json({
            success:true,
            data:author
        })
    } catch (e) {
        console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
}

const createBook = async(req,res)=>{
    try {
        const book = await Book.create(req.body)
        res.status(201).json({
            success:true,
            data:book 
        })
    } catch (e) {
        console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
}

const getBookWithAuthor = async(req,res)=>{
    try {
       const book = await Book.findById(req.params.id).populate('author')

       if(!book){
            return res.status(404).json({
                    success: false,
                    message: "Book not foun!",
                });
       }

       res.status(200).json({
        success:true,
        data:book
       })
    } catch (e) {
        console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
}

module.exports = {
    createAuthor,
    createBook,
    getBookWithAuthor
}

