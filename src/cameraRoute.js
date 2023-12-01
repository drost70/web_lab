// cameraRoute.js
const express = require('express');
const cameraController = require('./cameraController');

const router = express.Router();

router.get('/api/cameras', cameraController.getAllCameras);
router.post('/api/cameras', cameraController.createCamera);
router.put('/api/cameras', cameraController.updateCamera);
router.delete('/api/cameras/:id', cameraController.deleteCamera);

module.exports = router;
