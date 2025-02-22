"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../app/config"));
const AppError_1 = __importDefault(require("../app/error/AppError"));
const catchAsync_1 = __importDefault(require("../app/utils/catchAsync"));
const auth = (...requiredRole) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "unAuthorized user! Token not found");
        }
        try {
            const decode = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
            const { role, userId, phone } = decode;
            if (!requiredRole.includes(role)) {
                throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "unAuthorized user role!");
            }
            req.user = decode;
            next();
        }
        catch (error) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, error.message);
        }
    }));
};
exports.default = auth;
