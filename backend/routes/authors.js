const express = require('express');
const router = express();
const Joi = require('joi');

const authors = [
    {
        id: 1,
        firstName: "Sahir",
        LastName: "ALZAKARIA",
        nationality: "Syrian",
        image: "default-img.png"
    },
    {
        id: 2,
        firstName: "Ahmed",
        LastName: "Al-Hassan",
        nationality: "Jordanian",
        image: "default-img.png"
    },
    {
        id: 3,
        firstName: "Mohammad",
        LastName: "Al-Farouq",
        nationality: "Saudi",
        image: "default-img.png"
    },
    {
        id: 4,
        firstName: "Yousef",
        LastName: "Al-Masri",
        nationality: "Egyptian",
        image: "default-img.png"
    },
    {
        id: 5,
        firstName: "Khaled",
        LastName: "Al-Tamimi",
        nationality: "Palestinian",
        image: "default-img.png"
    }
];

/**
 * @desc Get all authors
 * @route /api/authors
 * @method GET
 * @access public
*/
router.get('/', (req, res) => {
    res.status(200).json(authors);
});

/**
 * @desc Get author by id
 * @route /api/authors/:id
 * @method GET
 * @access public
*/
router.get('/:id', (req, res) => {
    const author = authors.find(b => b.id === parseInt(req.params.id));
    if (author) {
        res.status(200).json(author);
    } else {
        res.status(404).json({ message: 'the author not found' })
    }
});

/**
 * @desc create new author
 * @route /api/authors
 * @method POST
 * @access public
*/

router.post('/', (req, res) => {

    const { error } = validateCreateAuthor(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const author = {
        id: authors.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationality: req.body.nationality,
        image: req.body.image
    };

    authors.push(author);
    res.status(201).json(author); // 201 => created Successfully
});

/**
 * @desc Update an author
 * @route /api/authors/:id
 * @method PUT
 * @access public
*/

router.put('/:id', (req, res) => {

    const { error } = validateUpdateAuthor(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const author = authors.find(b => b.id === parseInt(req.params.id));
    if (author) {
        res.status(200).json({ message: 'author has been updated' });
    } else {
        res.status(404).json({ message: 'author not found' })
    }

})

/**
 * @desc Delete an author
 * @route /api/authors/:id
 * @method DELETE
 * @access public
*/

router.delete('/:id', (req, res) => {

    const author = authors.find(b => b.id === parseInt(req.params.id));
    if (author) {
        res.status(200).json({ message: 'author has been deleted' });
    } else {
        res.status(404).json({ message: 'author not found' })
    }

})


// validate create author

function validateCreateAuthor(obj) {
    const schema = Joi.object({
        firstName: Joi.string().trim().min(3).max(200).required(),
        lastName: Joi.string().trim().min(3).max(200).required(),
        nationality: Joi.string().trim().min(3).max(200).required(),
        image: Joi.string(),
    });

    return schema.validate(obj);
}

// validate update author

function validateUpdateAuthor(obj) {
    const schema = Joi.object({
        firstName: Joi.string().trim().min(3).max(200),
        lastName: Joi.string().trim().min(3).max(200),
        nationality: Joi.string().trim().min(3).max(200),
        image: Joi.string(),
    });

    return schema.validate(obj);
}


module.exports = router;