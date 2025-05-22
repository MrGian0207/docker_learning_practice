import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

export const requestIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestId = Math.random().toString(36).substring(2, 15);
  req.requestId = requestId;
  res.setHeader("X-Request-ID", requestId);

  logger.info("Incoming request", {
    requestId,
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get("User-Agent"),
  });

  next();
};
