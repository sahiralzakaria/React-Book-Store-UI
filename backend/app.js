const express = require('express');
const logger = require('./middlewares/logger');
const { notFound, errorHanlder } = require('./middlewares/errors')
require("dotenv").config();
const connectToDB = require('./config/db');
const path = require("path");



// Connection to Database
connectToDB();

// init app
const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "images")));

// Apply Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.set("view engine", "ejs");

// Routes
app.use('/api/books', require('./routes/books'));
app.use('/api/authors', require('./routes/authors'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/upload', require('./routes/upload'));
app.use('/password', require('./routes/password'));

//Error Handler Middleware
app.use(notFound)
app.use(errorHanlder)

//Running The Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is Running in ${process.env.NODE_ENV} mode on port ${port}`)
});


