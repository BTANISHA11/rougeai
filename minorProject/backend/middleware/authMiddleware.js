// middlewares/authMiddleware.js

const User = require('../models/User');

// Middleware to check if the user exists
exports.checkUserExists = async (req, res, next) => {
    try {
        const user = await User.findOne({ userId: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Failed to check user existence', error });
    }
};
