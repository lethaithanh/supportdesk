const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandle } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// Connect to database
connectDB();

// Express App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Error Handle
app.use(errorHandle);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
