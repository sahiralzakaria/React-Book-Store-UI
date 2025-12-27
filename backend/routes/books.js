const express = require('express');
const router = express.Router();
const { validateCreateBook, validateUpdateBook } = require('../models/Book');
const books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy adventure following Bilbo Baggins on a quest with dwarves to reclaim their homeland.",
        price: 14.99,
        cover: "https://upload.wikimedia.org/wikipedia/commons/e/e7/The_Hobbit_-_title_page_of_first_American_print.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel exploring surveillance, totalitarianism, and the loss of individual freedom.",
        price: 12.99,
        cover: "https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg"
    },
    {
        id: 3,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A coming-of-age story about Holden Caulfield and his search for identity and belonging.",
        price: 11.49,
        cover: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"
    }
];


/**
 * @desc Get all books
 * @route /api/books
 * @method GET
 * @access public
*/
router.get('/', (req, res) => {
    res.status(200).json(books);
});

/**
 * @desc Get book by id
 * @route /api/books/:id
 * @method GET
 * @access public
*/
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'the book not found' })
    }
});

/**
 * @desc create new book
 * @route /api/books
 * @method POST
 * @access public
*/

router.post('/', (req, res) => {

    const { error } = validateCreateBook(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        cover: req.body.cover
    };

    books.push(book);
    res.status(201).json(book); // 201 => created Successfully
});

/**
 * @desc Update a book
 * @route /api/books/:id
 * @method PUT
 * @access public
*/

router.put('/:id', (req, res) => {

    const { error } = validateUpdateBook(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json({ message: 'book has been updated' });
    } else {
        res.status(404).json({ message: 'book not found' })
    }

})

/**
 * @desc Delete a book
 * @route /api/books/:id
 * @method DELETE
 * @access public
*/

router.delete('/:id', (req, res) => {

    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json({ message: 'book has been deleted' });
    } else {
        res.status(404).json({ message: 'book not found' })
    }

})



module.exports = router;

