// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkUserExists } = require('../middleware/authMiddleware');

// Create a new user
router.post('/users', userController.createUser);

// Get user by ID
router.get('/users/:id', checkUserExists, userController.getUserById);

// Update user by ID
router.put('/users/:id', checkUserExists, userController.updateUser);

// Delete user by ID
router.delete('/users/:id', checkUserExists, userController.deleteUser);

module.exports = router;
