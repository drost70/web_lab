const express = require('express');
const path = require('path');
const pool = require('./db');
const opn = require('opn');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/cameras', async (req, res) => {
  try {
    const allCameras = await pool.query('SELECT * FROM cameras');
    res.json(allCameras.rows);
  } catch (err) {
    console.error('Error getting cameras:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Встановлюємо папку для статичних файлів
  app.use(express.static(path.join(__dirname, 'src', 'build', 'public')));

  // Відправляємо всі невизначені шляхи (URLs) в React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'build', 'public', 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  opn(`http://localhost:${PORT}`);
});
