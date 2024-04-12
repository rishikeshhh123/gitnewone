// app.js
const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./route/expenseRoutes');
 const path = require('path');
const { sequelize } = require('./util/database');
const Expense = require('./models/Expense');  // Adjust the path based on your project structure


const app = express();
const PORT = process.env.PORT || 3008;

// Middleware
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api', expenseRoutes);

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Render the index page

    app.get('/', async (req, res) => {
        try {
          const expenses = await Expense.findAll();
          console.log('Expenses:', expenses); 
          res.render('index', { expenses });
        } catch (error) {
            console.error('Error fetching expenses:', error); 
          res.status(500).send(error.message);
        }
      });

// Start the server
//app.listen(PORT, () => {
  //console.log(`Server is running on http://localhost:${PORT}`);
//});
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing Sequelize:', error);
  });