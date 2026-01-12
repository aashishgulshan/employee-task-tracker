import { getAllEmployees, getUserTasks } from "./user.service.js";
import { successResponse, errorResponse, validationError, notFoundResponse } from "../../utils/responseHandler.js";

export const listEmployees = async (req, res) => {
  try {
    const users = await getAllEmployees();
    return successResponse(res, "Employees fetched", users);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

export const listUserTasks = async (req, res) => {
  try {
    const { id } = req.params;

    // employee can only access own tasks
    if (req.user.role === "EMPLOYEE" && req.user.id !== Number(id)) {
      return errorResponse(res, "Unauthorized", 403);
    }

    const tasks = await getUserTasks(id);
    return successResponse(res, "Tasks fetched", tasks);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};