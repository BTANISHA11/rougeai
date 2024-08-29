// controllers/userController.js

const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { userId, email, name } = req.body;
        const newUser = new User({ userId, email, name });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get user', error });
    }
};

// Update user information
exports.updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findOneAndUpdate(
            { userId: req.params.id },
            { name, email },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ userId: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error });
    }
};
