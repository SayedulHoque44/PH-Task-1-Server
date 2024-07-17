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
exports.BlogServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const Blogs_constant_1 = require("./Blogs.constant");
const Blogs_model_1 = require("./Blogs.model");
const createBlogIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createBlog = yield Blogs_model_1.BlogModel.create(payload);
    return createBlog;
});
const updateBlogIntoDB = (blogId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Blogs_model_1.BlogModel.findById(blogId);
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Not Found!");
    }
    const updatedBlog = yield Blogs_model_1.BlogModel.findByIdAndUpdate(blogId, payload, {
        new: true,
    });
    return updatedBlog;
});
const getSingleBlogByIdFromDb = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Blogs_model_1.BlogModel.findById(blogId);
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Not Found!");
    }
    const singleBlog = yield Blogs_model_1.BlogModel.findById(blogId);
    return singleBlog;
});
const getBlogsQueryFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogsQuery = new QueryBuilder_1.default(Blogs_model_1.BlogModel.find(), query)
        .search(Blogs_constant_1.BlogSearchFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield blogsQuery.modelQuery;
    const meta = yield blogsQuery.countTotal();
    return {
        meta,
        result,
    };
});
const deleteBlogFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Blogs_model_1.BlogModel.findById(blogId);
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Not Found!");
    }
    const deleted = yield Blogs_model_1.BlogModel.findByIdAndDelete(blogId);
    return deleted;
});
exports.BlogServices = {
    createBlogIntoDB,
    updateBlogIntoDB,
    getBlogsQueryFromDb,
    getSingleBlogByIdFromDb,
    deleteBlogFromDB,
};
