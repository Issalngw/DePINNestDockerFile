/**
 * DePINNest — Decentralized Infrastructure Node Demo
 * Author: @SirIsarck
 * Description: A mock API server simulating DePIN node operations (energy, IoT, or compute)
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Basic health route
app.get("/", (req, res) => {
  res.send("Welcome to DePINNest Node 🌐 — decentralized infrastructure simulation running smoothly!");
});

// Example status route (for NodeOps health checks)
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    node: process.env.APP_NAME || "DePINNest",
    env: process.env.NODE_ENV || "development",
    uptime: process.uptime().toFixed(2) + "s",
  });
});

// Example mock data route
app.get("/metrics", (req, res) => {
  res.json({
    nodeId: "depinnest-demo-001",
    energyGenerated: Math.floor(Math.random() * 500) + " kWh",
    uptime: process.uptime().toFixed(2) + " seconds",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(port, () => {
  console.log(`DePINNest Node running at http://localhost:${port}`);
});
