"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const requestId_1 = require("./middleware/requestId");
const errorHandler_1 = require("./middleware/errorHandler");
const morganLogger_1 = require("./middleware/morganLogger");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(morganLogger_1.morganLogger);
app.use(requestId_1.requestIdMiddleware);
app.use(index_1.default);
app.use("/{*path}", (req, res) => {
    res.status(404).json({
        error: "Route not found",
        requestId: req.requestId,
    });
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
