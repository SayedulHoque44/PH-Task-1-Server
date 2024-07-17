"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// express app.use e jkn 4 ta parametter pay tkn express buje ney ata akta global error handler
const globalErrorHandler = (err, req, res, next) => {
    //
    const statusCode = 500;
    //Response
    return res.status(statusCode).json({
        success: false,
        message: err.message || "Somthing Went Wrong",
        err,
    });
};
exports.default = globalErrorHandler;
