// models/SkinData.js

const mongoose = require('mongoose');

const SkinDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    beforeImage: {
        type: String,
        required: true,
    },
    afterImage: {
        type: String,
        required: true,
    },
    healthAnalysis: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SkinData = mongoose.model('SkinData', SkinDataSchema);

module.exports = SkinData;
