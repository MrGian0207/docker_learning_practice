"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../config/logger"));
const router = (0, express_1.Router)();
router.get("/hello", (req, res) => {
    logger_1.default.info("Hello endpoint accessed", {
        requestId: req.requestId,
        timestamp: new Date().toISOString(),
    });
    res.json({
        message: "Hello from Node.js + TypeScript!",
        requestId: req.requestId,
        timestamp: new Date().toISOString(),
    });
});
exports.default = router;
