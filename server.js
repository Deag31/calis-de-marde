const express = require('express');
const cors = require('cors'); // Import cors middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API route for grow data
app.get('/api/grows', (req, res) => {
    res.json({
        name: "Summer Grow 2024",
        plants: [
            { strain: "OG Kush", stage: "Vegetative Week 3", type: "Auto", health: "Healthy" },
            { strain: "Blue Dream", stage: "Flowering Week 2", type: "Photoperiod", health: "Yellowing leaves" }
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
