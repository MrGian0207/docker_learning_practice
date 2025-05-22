import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";
import { ENV } from "../config/env";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error("Unhandled error", {
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
    message:
      ENV.NODE_ENV === "development" ? error.message : "Something went wrong",
  });
};
