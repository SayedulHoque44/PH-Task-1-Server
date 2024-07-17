/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";


// express app.use e jkn 4 ta parametter pay tkn express buje ney ata akta global error handler
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //
  const statusCode = 500;


  //Response
  return res.status(statusCode).json({
    success: false,
    message:err.message || "Somthing Went Wrong",
    err,
  });
};

export default globalErrorHandler;
