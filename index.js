const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");
const mediaRoutes = require("./routes/mediaRoutes");

// Middleware
app.use(cors({
  origin: "*", // allow all origins for simplicity
  methods: ["GET", "POST"],
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// DB Connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Desktop Photo and Video Manager");
});

app.use("/api/media", mediaRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at Port : ${PORT}`);
});
