const express = require('express')
// Create a express router
const router = express.Router()
const {
    getAllBooks,
    getSingleBookByID,
    addNewBook,
    updateBook,
    deleteBook} = require('../controllers/bookController')

// all routes that are related to books only.
router.get('/get', getAllBooks)
router.get('/get/:id', getSingleBookByID)
router.post('/add', addNewBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id',deleteBook)

module.exports = router; 