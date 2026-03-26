const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./Routes/authRoutes.js");
const userRoutes = require("./Routes/userRoutes.js");
const managerRoutes = require("./Routes/managerRoutes.js");
const employeeRoutes = require("./Routes/employeRoutes.js");
const { errorHandler } = require("./Middlewares/errorMiddleware.js");
const connectDatabase = require("./config/database.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDatabase(); // Ensure your connectDatabase() logs success/failure

// CORS middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend
      "https://taskmanager-client-three.vercel.app" // Vercel frontend
    ],
    credentials: true, // Allow cookies/credentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/ticket", managerRoutes);
app.use("/employee", employeeRoutes);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));