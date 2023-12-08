const express = require('express');
const router = express.Router();
const cameraController = require('./camera.controller');

router.post('/create', cameraController.createCamera);
router.get('/get', cameraController.getCameras);
router.put('/update', cameraController.updateCamera);
router.delete('/delete/:id', cameraController.deleteCamera);

module.exports = router;
