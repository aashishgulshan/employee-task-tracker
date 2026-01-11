import { Router } from "express";
import { listEmployees, listUserTasks } from "./user.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";

const router = Router();

router.get("/", authMiddleware, roleMiddleware(["ADMIN"]), listEmployees);
router.get("/:id/tasks", authMiddleware, listUserTasks);

export default router;