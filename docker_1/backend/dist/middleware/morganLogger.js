"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganLogger = void 0;
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("../config/logger"));
const morganFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" ' +
    ':status :res[content-length] ":referrer" ":user-agent" - :response-time ms';
exports.morganLogger = (0, morgan_1.default)(morganFormat, {
    stream: {
        write: (message) => logger_1.default.info(message.trim(), { type: "http" }),
    },
});
