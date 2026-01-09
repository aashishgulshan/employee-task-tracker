import { registerUser, loginUser } from "./auth.service.js";
import { successResponse, errorResponse, validationError, notFoundResponse } from "../../utils/responseHandler.js";
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            validationError(res, "Name, email and password are required", 400);
            return;
        }
        const user = await registerUser({ name, email, password, role });
        successResponse(res, "User registered successfully", 201, user);
    } catch (error) {
        errorResponse(res, error.message, 500);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            validationError(res, "Email and password are required", 400);
            return;
        }
        const user = await loginUser({ email, password });
        successResponse(res, "logged in successfully", 200, user);
    } catch (error) {
        errorResponse(res, error.message, 500);
    }
}