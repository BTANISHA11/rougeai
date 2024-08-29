const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const skinDataRoutes = require('./routes/skinRoutes');
const shadesDataRoutes = require('./routes/shadesRoutes');

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Use the user routes
app.use('/api', userRoutes);
app.use('/api', skinDataRoutes);
app.use('/api', shadesDataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
