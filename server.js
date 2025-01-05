const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint: Current Grow
app.get('/api/current-grow', (req, res) => {
    res.json({
        name: "Summer Grow 2024",
        objective: "Max Yield",
        plants: [
            { strain: "OG Kush", stage: "Vegetative Week 3", type: "Auto", health: "Healthy" },
            { strain: "Blue Dream", stage: "Flowering Week 2", type: "Photoperiod", health: "Yellowing leaves" }
        ]
    });
});

// Endpoint: Strains
app.get('/api/strains', (req, res) => {
    res.json([
        {
            name: "OG Kush",
            genetics: "Indica-dominant",
            thc_content: "20-25%",
            cbd_content: "0.5-1%",
            effects: ["Relaxed", "Happy", "Sleepy"],
            flavors: ["Earthy", "Pine", "Citrus"]
        },
        {
            name: "Blue Dream",
            genetics: "Sativa-dominant",
            thc_content: "18-22%",
            cbd_content: "1%",
            effects: ["Uplifted", "Creative", "Relaxed"],
            flavors: ["Berry", "Sweet", "Earthy"]
        }
    ]);
});

// Endpoint: Analytics
app.get('/api/analytics', (req, res) => {
    res.json({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [5, 10, 15, 20]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
