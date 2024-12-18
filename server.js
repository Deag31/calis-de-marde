const express = require('express');
const cors = require('cors'); // Import CORS middleware

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS globally for all routes

app.get('/api/grows', (req, res) => {
    res.json({
        name: "Summer Grow 2024",
        plants: [
            { strain: "OG Kush", stage: "Vegetative Week 3", type: "Auto", health: "Healthy" },
            { strain: "Blue Dream", stage: "Flowering Week 2", type: "Photoperiod", health: "Yellowing leaves" }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
