const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');

// view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routes
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});