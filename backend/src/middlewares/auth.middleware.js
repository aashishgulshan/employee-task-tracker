import jwt from "jsonwebtoken";
import {validationError} from "../utils/responseHandler"
export const authMiddleware = (req, res, next) = > {
    try {
        
    } catch (error) {
        return validationError(res, 401, "Invalid or Expire Token", error)
    }
}