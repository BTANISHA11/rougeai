// controllers/skinDataController.js

const SkinData = require('../models/skinData');

// Create a new skin data entry
exports.createSkinData = async (req, res) => {
    try {
        const { userId, beforeImage, afterImage, healthAnalysis } = req.body;
        const newSkinData = new SkinData({ userId, beforeImage, afterImage, healthAnalysis });
        await newSkinData.save();
        res.status(201).json({ message: 'Skin data saved successfully', skinData: newSkinData });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save skin data', error });
    }
};

// Get skin data for a user
exports.getSkinData = async (req, res) => {
    try {
        const skinData = await SkinData.find({ userId: req.params.id });
        if (!skinData.length) {
            return res.status(404).json({ message: 'No skin data found for this user' });
        }
        res.status(200).json(skinData);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve skin data', error });
    }
};
