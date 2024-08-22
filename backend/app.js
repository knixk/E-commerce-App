import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config({ path: "backend/config/config.env" });
import { connectDatabase } from "./config/dbConnect.js";

// Import all routes
import productRoutes from "./routes/products.js";
import errorMiddleware from "./middlewares/errors.js";

app.use(express.json());

// Connecting to database
connectDatabase();

app.use("/api", productRoutes); 
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(
    `Up on port ${process.env.PORT} and ${process.env.NODE_ENV} mode`
  );
});
