const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// Define routes
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.use('/api/posts', require('./routes/api/posts.js'));

app.get('/', (req, res) => {
  res.send('Yo');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
