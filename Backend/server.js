import express from "express";
const dotenv = "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { configDotenv } from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
const app = express();

const PORT = process.env.PORT || 5000;

configDotenv();

app.use(express.json());// to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`server running on port ${PORT}`);
});
