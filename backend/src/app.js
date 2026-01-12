import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/user.routes.js";
import taskRoutes from "./modules/tasks/task.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "Backend is running 🚀" });
});
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

export default app;
