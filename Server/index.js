const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

// Use cors
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

app.use('/Image', express.static(path.join(__dirname, 'Image')));

const TodoItemRoute = require('./routes/recipe');
app.use('/', TodoItemRoute);

app.listen(PORT, () => console.log('Server connected'));
