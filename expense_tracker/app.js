const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./backend/routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/user', userRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
