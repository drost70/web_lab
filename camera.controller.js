const db = require('./db');

class CameraController {
    async createCamera(req, res) {
        try {
            const { model, resolution, zoom, memoryCardType, photosCount, price } = req.body;
    
            if (!model || !resolution || !zoom || !memoryCardType || !photosCount || !price) {
                return res.status(400).json({ error: 'All fields are required.' });
            }
    
            const [rows, fields] = await db.execute('INSERT INTO cameras (model, resolution, zoom, memoryCardType, photosCount, price) VALUES (?, ?, ?, ?, ?, ?)', [model, resolution, zoom, memoryCardType, photosCount, price]);
            res.json(rows);
        } catch (error) {
            console.error("Error creating camera:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    

    async getCameras(req, res) {
        const [rows, fields] = await db.execute('SELECT * FROM cameras');
        res.json(rows);
    }


    async updateCamera(req, res) {
        const { model, resolution, zoom, memoryCardType, photosCount, price, id } = req.body;
        const [rows, fields] = await db.execute('UPDATE cameras SET model = ?, resolution = ?, zoom = ?, memoryCardType = ?, photosCount = ?,price = ? WHERE id = ?', [model, resolution, zoom, memoryCardType, photosCount, price]);
        res.json(rows[0]);
    }

    async deleteCamera(req, res) {
        const id = req.params.id;
        const [rows, fields] = await db.execute('DELETE FROM cameras WHERE id = ?', [id]);
        res.json(rows[0]);
    }
}

module.exports = new CameraController();
