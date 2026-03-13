require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const squareRoutes = require('./routes/squareRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', squareRoutes);

// chạy server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});