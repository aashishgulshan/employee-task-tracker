import { errorResponse } from "../utils/responseHandler.js";
export const roleMiddleware = (allowedRoles =["ADMIN", "EMPLOYEE"]) => {
    return (req, res, next) => {
        if(!req.user) {
            return errorResponse(res, "Unauthorized User", 401);
        }                                                                                                                                                                           
        if(!allowedRoles.includes(req.user.role)) {
            return errorResponse(res, "Access denied", 403);
        }
        next();
    }
}