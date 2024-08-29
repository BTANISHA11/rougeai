// routes/skinDataRoutes.js

const express = require('express');
const router = express.Router();
const skinDataController = require('../controllers/skinDataController');

// Create a new skin data entry
router.post('/skindata', skinDataController.createSkinData);

// Get all skin data for a user
router.get('/skindata/:id', skinDataController.getSkinData);

module.exports = router;
