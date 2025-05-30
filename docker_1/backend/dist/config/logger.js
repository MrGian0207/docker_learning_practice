"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const env_1 = require("./env");
const logger = winston_1.default.createLogger({
    level: env_1.ENV.LOG_LEVEL,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.json()),
    defaultMeta: { service: "express-api" },
    transports: [
        new winston_1.default.transports.File({
            filename: path_1.default.join("logs", "error.log"),
            level: "error",
            maxsize: 5 * 1024 * 1024,
            maxFiles: 5,
        }),
        new winston_1.default.transports.File({
            filename: path_1.default.join("logs", "combined.log"),
            maxsize: 5 * 1024 * 1024,
            maxFiles: 5,
        }),
    ],
});
if (env_1.ENV.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
    }));
}
exports.default = logger;
