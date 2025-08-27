require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const donorRoutes = require("./routes/donorRoutes.js");
const ngoRoutes = require("./routes/ngoRoutes.js");
const requestPickupRoutes = require("./routes/requestPickup.js");
const adminRoutes = require("./routes/adminRoutes.js");
const path = require("path");
const cors = require("cors");

const app = express();
connectDB();

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});
app.use(
  cors({
    origin: "https://meal-mission.vercel.app", // Your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/donors", donorRoutes);
app.use("/ngo", ngoRoutes);
app.use("/pickup", requestPickupRoutes);
app.use("/admin", adminRoutes);
app.get("/health", (req, res) => res.json({ status: "ok" }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
