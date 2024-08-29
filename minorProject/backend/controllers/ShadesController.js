// controllers/shadesDataController.js

const ShadesData = require('../models/ShadesData');

// Create a new shades data entry
exports.createShadesData = async (req, res) => {
    try {
        const { userId, shadeName, appliedImage } = req.body;
        const newShadesData = new ShadesData({ userId, shadeName, appliedImage });
        await newShadesData.save();
        res.status(201).json({ message: 'Shades data saved successfully', shadesData: newShadesData });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save shades data', error });
    }
};

// Get shades data for a user
exports.getShadesData = async (req, res) => {
    try {
        const shadesData = await ShadesData.find({ userId: req.params.id });
        if (!shadesData.length) {
            return res.status(404).json({ message: 'No shades data found for this user' });
        }
        res.status(200).json(shadesData);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve shades data', error });
    }
};
