import { Router } from "express";
import {
  create,
  list,
  updateStatus,
} from "./task.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";

const router = Router();

router.post("/", authMiddleware, roleMiddleware(["ADMIN"]), create);
router.get("/", authMiddleware, roleMiddleware(["ADMIN"]), list);
router.put("/:id", authMiddleware, updateStatus);

export default router;