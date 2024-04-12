const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST">' +
        '<input type="text" name="title" placeholder="Product Title">' +
        '<input type="text" name="size" placeholder="Product Size">' +
        '<button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    // Access both title and size from the request body
    const { title, size } = req.body;

    // Log the data to the console
    console.log('Product Title:', title);
    console.log('Product Size:', size);

    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome</h1>');
});

app.listen(3007);
