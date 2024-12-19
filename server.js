const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Analytics Endpoint
app.get('/api/analytics', (req, res) => {
  res.json({
    temperature: { labels: ['Week 1', 'Week 2'], values: [24, 26] },
    humidity: { labels: ['Week 1', 'Week 2'], values: [60, 65] },
    health: { labels: ['Plant 1', 'Plant 2'], values: [80, 50] },
    plants: [
      { name: 'OG Kush', type: 'indica', healthScore: 85 },
      { name: 'Blue Dream', type: 'sativa', healthScore: 45 }
    ]
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
