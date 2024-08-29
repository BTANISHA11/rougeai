// routes/shadesDataRoutes.js

const express = require('express');
const router = express.Router();
const shadesDataController = require('../controllers/ShadesController');

// Create a new shades data entry
router.post('/shadesdata', shadesDataController.createShadesData);

// Get all shades data for a user
router.get('/shadesdata/:id', shadesDataController.getShadesData);

module.exports = router;
