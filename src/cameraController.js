const pool = require('./db');

class CameraController {
  async getAllCameras(req, res) {
    try {
      const allCameras = await pool.query('SELECT * FROM cameras');
      res.json(allCameras.rows);
    } catch (err) {
      console.error('Error getting cameras:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createCamera(req, res) {
    try {
      const { name, price, resolution, type } = req.body;
      const newCamera = await pool.query(
        'INSERT INTO cameras (name, price, resolution, type) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, price, resolution, type]
      );
      res.json(newCamera.rows[0]);
    } catch (err) {
      console.error('Error creating camera:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateCamera(req, res) {
    try {
      const { id, name, price, resolution, type } = req.body;
      const updatedCamera = await pool.query(
        'UPDATE cameras SET name = $1, price = $2, resolution = $3, type = $4 WHERE id = $5 RETURNING *',
        [name, price, resolution, type, id]
      );
      res.json(updatedCamera.rows[0]);
    } catch (err) {
      console.error('Error updating camera:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteCamera(req, res) {
    try {
      const id = req.params.id;
      const deletedCamera = await pool.query('DELETE FROM cameras WHERE id = $1 RETURNING *', [id]);
      res.json(deletedCamera.rows[0]);
    } catch (err) {
      console.error('Error deleting camera:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new CameraController();
