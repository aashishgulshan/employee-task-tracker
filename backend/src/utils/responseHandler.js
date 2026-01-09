export const successResponse = (res, message = "Success", statusCode = 200, data = null) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
        timestamp: new Date().toISOString()
    });
}

export const errorResponse = (res, message = "Something went wrong", statusCode = 500) => {
    return res.status(statusCode).json({ success: false, message });
}

export const validationError = (res, message = "Validation failed", statusCode = 400, errors = null) => {
    return res.status(statusCode).json({ success: false, message, errors });
}

export const notFoundResponse = (res, message = "Resource not found", statusCode = 404, data = null) => {
    return res.status(statusCode).json({ success: false, message, data });
}