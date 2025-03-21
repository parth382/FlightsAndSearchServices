import express from "express";
import { connectToDatabase } from "./config/dataSource"; // Import database connection
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ApiRoutes from './routes/v1/v1index'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// first we use bodyParser in startServer function it is mistake
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// API routes
app.use('/api', ApiRoutes);

// Connect to the database and start the server
const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
