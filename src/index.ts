import express from "express";
import { connectToDatabase } from "./config/dataSource"; // Import database connection
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to the database and start the server
const startServer = async () => {
  await connectToDatabase(); // Ensure DB is connected before starting the server

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
