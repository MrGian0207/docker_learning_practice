"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const logger_1 = __importDefault(require("./config/logger"));
const PORT = env_1.ENV.PORT;
const server = app_1.default.listen(PORT, () => {
    logger_1.default.info(`🚀 Server running at http://localhost:${PORT}`, {
        port: PORT,
        environment: env_1.ENV.NODE_ENV,
        nodeVersion: process.version,
    });
});
const gracefulShutdown = (signal) => {
    logger_1.default.info(`Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
        process.exit(0);
    });
};
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("uncaughtException", (error) => {
    logger_1.default.error("Uncaught Exception", {
        error: error.message,
        stack: error.stack,
    });
    process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
    logger_1.default.error("Unhandled Rejection", { reason, promise });
});
