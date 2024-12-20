const express = require("express");
const cors = require("cors");

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Port for the server
const PORT = process.env.PORT || 3000;

// Analytics API endpoint
app.get("/api/analytics", (req, res) => {
    res.json({
        temperature: { labels: ["Week 1", "Week 2"], values: [22, 25] },
        humidity: { labels: ["Week 1", "Week 2"], values: [55, 60] },
        health: { labels: ["Plant 1", "Plant 2"], values: [80, 60] },
        plants: [
            { name: "OG Kush", type: "indica", healthScore: 85 },
            { name: "Blue Dream", type: "sativa", healthScore: 45 }
        ]
    });
});

// Default route for server status
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
