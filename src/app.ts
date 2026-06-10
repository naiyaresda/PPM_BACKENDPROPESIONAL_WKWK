import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import courtRoutes from "./routes/courtRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/court", courtRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;