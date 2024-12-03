const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/pmumentor", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/debug", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  