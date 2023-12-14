const express = require('express');
const router = express.Router();
const cameraController = require('../controller/cameraController');

router.post('/create-camera-type', cameraController.createCameraType);

router.get('/camera-types', cameraController.getAllCameraTypes);

router.get('/camera-types/:id', cameraController.getOneCameraType);

router.put('/update-camera-type/:id', cameraController.updateCameraType);

router.delete('/delete-camera-type/:id', cameraController.deleteCameraType);

module.exports = router;