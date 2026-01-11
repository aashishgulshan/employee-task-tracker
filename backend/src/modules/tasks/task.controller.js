import {
  createTask,
  getAllTasks,
  updateTaskStatus,
} from "./task.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";

export const create = async (req, res) => {
  try {
    const task = await createTask(req.body);
    return successResponse(res, "Task created", task, 201);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

export const list = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    return successResponse(res, "Tasks fetched", tasks);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const task = await updateTaskStatus(req.params.id, req.body.status);
    return successResponse(res, "Task updated", task);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};