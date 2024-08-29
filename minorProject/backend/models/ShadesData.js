// models/ShadesData.js

const mongoose = require('mongoose');

const ShadesDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    shadeName: {
        type: String,
        required: true,
    },
    appliedImage: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ShadesData = mongoose.model('ShadesData', ShadesDataSchema);

module.exports = ShadesData;
