"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// replacement of try catch
// interface CustomReq extends Request {
//   user: JwtPayload;
// }
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(err => next(err));
    };
};
exports.default = catchAsync;
