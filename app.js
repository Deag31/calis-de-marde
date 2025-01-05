document.addEventListener("DOMContentLoaded", () => {
    const API_BASE_URL = "https://calis-de-marde-production.up.railway.app/api";

    // Tab navigation logic
    const tabs = document.querySelectorAll(".nav-bar a");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.add("hidden"));

            tab.classList.add("active");
            const target = tab.getAttribute("data-tab");
            document.getElementById(target).classList.remove("hidden");
        });
    });

    document.querySelector("[data-tab='dashboard']").classList.add("active");
    document.getElementById("dashboard").classList.remove("hidden");

    // Fetch and display Current Grow data
    async function fetchCurrentGrow() {
        try {
            const response = await fetch(`${API_BASE_URL}/current-grow`);
            if (!response.ok) throw new Error("Failed to fetch current grow data");
            const growData = await response.json();

            const currentGrowElement = document.getElementById("current-grow");
            currentGrowElement.innerHTML = `
                <div style="background-color: #dcedc8; padding: 15px; border-radius: 10px;">
                    <h3>Current Grow</h3>
                    <p><strong>Name:</strong> ${growData.name}</p>
                    <p><strong>Objective:</strong> ${growData.objective}</p>
                </div>
            `;
        } catch (error) {
            console.error("Error fetching Current Grow data:", error);
            document.getElementById("current-grow").innerHTML = "<p>Error loading grow data.</p>";
        }
    }

    // Fetch and display strains
    async function fetchStrains() {
        try {
            const response = await fetch(`${API_BASE_URL}/strains`);
            if (!response.ok) throw new Error("Failed to fetch strains");
            const strains = await response.json();

            const strainList = document.getElementById("strain-list");
            strainList.innerHTML = "";
            strains.forEach(strain => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${strain.name}</strong> - ${strain.genetics}
                    <ul>
                        <li><strong>THC:</strong> ${strain.thc_content}</li>
                        <li><strong>CBD:</strong> ${strain.cbd_content}</li>
                        <li><strong>Effects:</strong> ${strain.effects.join(", ")}</li>
                        <li><strong>Flavors:</strong> ${strain.flavors.join(", ")}</li>
                    </ul>
                `;
                strainList.appendChild(li);
            });
        } catch (error) {
            console.error("Error fetching strains:", error);
            document.getElementById("strain-list").innerHTML = "<p>Error loading strains.</p>";
        }
    }

    // Fetch and display analytics
    async function fetchAnalytics() {
        try {
            const response = await fetch(`${API_BASE_URL}/analytics`);
            if (!response.ok) throw new Error("Failed to fetch analytics");
            const analyticsData = await response.json();

            const ctx = document.getElementById("growth-chart").getContext("2d");
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: analyticsData.labels,
                    datasets: [{
                        label: "Growth Metrics",
                        data: analyticsData.data,
                        borderColor: "#4caf50",
                        backgroundColor: "rgba(76, 175, 80, 0.2)"
                    }]
                }
            });
        } catch (error) {
            console.error("Error fetching analytics:", error);
            document.
