const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Yo');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
