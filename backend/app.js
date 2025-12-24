const express = require('express');
const booksPath = require('./routes/books')
const authorsPath = require('./routes/authors')
// init app
const app = express();

//Apply Middlewares
app.use(express.json());

//Routes
app.use('/api/books', booksPath);
app.use('/api/authors', authorsPath);


//Running The Server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
});


