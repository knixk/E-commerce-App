import express from "express";
import dotenv from "dotenv";
const app = express();
import { connectDatabase } from "./config/dbConnect.js";

// Import all routes
import productRoutes from "./routes/products.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught expection");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());

// Connecting to database
connectDatabase();

app.use("/api", productRoutes);
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Up on port ${process.env.PORT} and ${process.env.NODE_ENV} mode`
  );
});

//Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
