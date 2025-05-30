import morgan from "morgan";
import logger from "../config/logger";

const morganFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" ' +
  ':status :res[content-length] ":referrer" ":user-agent" - :response-time ms';

export const morganLogger = morgan(morganFormat, {
  stream: {
    write: (message) => logger.info(message.trim(), { type: "http" }),
  },
});
