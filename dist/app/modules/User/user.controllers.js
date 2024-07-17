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
exports.userControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const user_service_1 = require("./user.service");
// user register
const userRegister = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const createdUser = yield user_service_1.userServices.registerUserIntoDB(userData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Registerd Successfully!",
        data: createdUser,
    });
}));
// user login
const userLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const loggedUserWithToken = yield user_service_1.userServices.loginUser(userData);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "login Successfully!",
        data: loggedUserWithToken,
    });
}));
// get me
const getMe = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { deviceInfo } = req.body;
    const { phone } = req.user;
    const getUser = yield user_service_1.userServices.getMeFromDB(deviceInfo, phone);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "user retrive Successfully!",
        data: getUser,
    });
}));
// get me
const getSingleUserById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const { phone, role } = req.user;
    const getUser = yield user_service_1.userServices.getSingleUserFromDB(userId, phone, role);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "user retrive Successfully!",
        data: getUser,
    });
}));
// get me
const updateSingleUserById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const decodedData = req.user;
    const userData = req.body;
    const getUser = yield user_service_1.userServices.updateSingleUserFromDB(userId, decodedData, userData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "user update Successfully!",
        data: getUser,
    });
}));
// get all users
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield user_service_1.userServices.getAllUserFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "users retrive Successfully!",
        data: getUser,
    });
}));
// delete all users login
const deleteAllUsersLogin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield user_service_1.userServices.deleteAllUsersLoginFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "all user device logout Successfully!",
        data: getUser,
    });
}));
// get me
const deleteSingleUserById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const getUser = yield user_service_1.userServices.deleteSingleUserFromDB(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "user Deleted Successfully!",
        data: getUser,
    });
}));
//
exports.userControllers = {
    userRegister,
    userLogin,
    getMe,
    getSingleUserById,
    updateSingleUserById,
    getAllUsers,
    deleteSingleUserById,
    deleteAllUsersLogin,
};
