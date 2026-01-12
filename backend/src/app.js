import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/user.routes.js";
import taskRoutes from "./modules/tasks/task.routes.js";
import authRouter from "./modules/auth/auth.routes.js";

const app = express();

// app.use(cors());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173"
    ],
    credentials: true
  })
);
app.use(express.json());

app.get("/health", (_, res) => { res.json({ status: "Backend is running 🚀" })});
app.use("/auth", authRouter);
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

export default app;
