"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = __importDefault(require("../config/logger"));
const env_1 = require("../config/env");
const errorHandler = (error, req, res, next) => {
    logger_1.default.error("Unhandled error", {
        requestId: req.requestId,
        error: error.message,
        stack: error.stack,
        url: req.url,
        method: req.method,
        ip: req.ip,
    });
    res.status(500).json({
        error: "Internal Server Error",
        requestId: req.requestId,
        message: env_1.ENV.NODE_ENV === "development" ? error.message : "Something went wrong",
    });
};
exports.errorHandler = errorHandler;
