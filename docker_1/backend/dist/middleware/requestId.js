"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestIdMiddleware = void 0;
const logger_1 = __importDefault(require("../config/logger"));
const requestIdMiddleware = (req, res, next) => {
    const requestId = Math.random().toString(36).substring(2, 15);
    req.requestId = requestId;
    res.setHeader("X-Request-ID", requestId);
    logger_1.default.info("Incoming request", {
        requestId,
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get("User-Agent"),
    });
    next();
};
exports.requestIdMiddleware = requestIdMiddleware;
