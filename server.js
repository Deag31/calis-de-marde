const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
