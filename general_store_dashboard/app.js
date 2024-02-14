// app.js
const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/items');
const Item = require('./models/item');
const app = express();
Item.createTable()
  .then(() => {
    console.log('Table created successfully');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Fetch all items from the database and pass them to the view
    Item.getAllItems()
      .then(([items]) => {
        res.render('dashboard', { items });
      })
      .catch(err => console.log(err));
  });

app.use('/items', itemsRoutes);

app.listen(3004, () => {
  console.log('Server is running on port 3004');
});
