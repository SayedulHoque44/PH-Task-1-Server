"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./app/modules/User/user.routes");
const globalError_1 = __importDefault(require("./app/middleware/globalError"));
exports.app = (0, express_1.default)();
// parser
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: "*",
}));
exports.app.use("/api/user", user_routes_1.UserRoutes);
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.app.use(globalError_1.default);
