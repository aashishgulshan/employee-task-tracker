import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/user.routes.js";
import taskRoutes from "./modules/tasks/task.routes.js";
import authRouter from "./modules/auth/auth.routes.js";

import { globalErrorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     credentials: true
//   })
// );
app.use(express.json());

app.get("/health", (_, res) => { res.json({ status: "Backend is running 1.1 🚀" })});
// app.use("/auth", authRouter);
// app.use("/users", userRoutes);
// app.use("/tasks", taskRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// Global error handler (ALWAYS LAST)
app.use(globalErrorHandler);

export default app;
