const db = require('../db');

class CameraController {
async getAllCameraTypes(req, res) {
    try {
        const [cameraTypes] = await db.query('SELECT * FROM cameraTypes');
        console.log('Data from the database:', cameraTypes);
        res.json(cameraTypes);
    } catch (err) {
        console.error('Error getting camera types:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
    
    async createCameraType(req, res) {
        try {
            const { name, description } = req.body;
    
            const newCameraType = await db.query(
                'INSERT INTO cameraTypes (name, description) VALUES (?, ?)',
                [name, description]
            );
    
            const newCameraTypeId = newCameraType[0].insertId;
    
            const createdCameraType = await db.query('SELECT * FROM cameraTypes WHERE id = ?', [newCameraTypeId]);
    
            res.json(createdCameraType[0]);
        } catch (err) {
            console.error('Error creating camera type:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }    

    async getOneCameraType(req, res) {
        try {
            const id = req.params.id;
            const [oneCameraType] = await db.query('SELECT * FROM cameraTypes WHERE id = ?', [id]);

            if (oneCameraType.length > 0) {
                res.json(oneCameraType[0]);
            } else {
                res.status(404).json({ error: 'Camera type not found' });
            }
        } catch (error) {
            console.error('Error getting one camera type:', error);
            res.status(500).json({ error: 'Error getting one camera type' });
        }
    }

    async updateCameraType(req, res) {
        try {
            const { id, name, description } = req.body;
            await db.query(
                'UPDATE cameraTypes SET name = ?, description = ? WHERE id = ?',
                [name, description, id]
            );

            const updatedCameraType = await db.query('SELECT * FROM cameraTypes WHERE id = ?', [id]);
            res.json(updatedCameraType[0]);
        } catch (error) {
            console.error('Error updating camera type:', error);
            res.status(500).json({ error: 'Error updating camera type' });
        }
    }

    async deleteCameraType(req, res) {
        try {
            const id = req.params.id;
            const deletedCameraType = await db.query('DELETE FROM cameraTypes WHERE id = ?', [id]);
            res.json(deletedCameraType[0]);
        } catch (error) {
            console.error('Error deleting camera type:', error);
            res.status(500).json({ error: 'Error deleting camera type' });
        }
    }
}

module.exports = new CameraController();
