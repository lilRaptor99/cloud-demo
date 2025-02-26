const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

// HTTP request logging with Morgan
app.use(morgan("dev"));

// Hello endpoint with name parameter
app.get("/hello/:firstName", (req, res) => {
  const firstName = req.params.firstName;
  console.log(`Hello request for name: ${firstName}`);
  res.json({
    message: `Hello, ${firstName}!`,
  });
});

// Root route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Hello API! Use /hello/{yourName} to get a greeting."
  );
});

// 404 handler
app.use((req, res) => {
  console.warn(`404 - Not Found: ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
