import { Router } from "express";
import logger from "../config/logger";

const router = Router();

router.get("/hello", (req, res) => {
  logger.info("Hello endpoint accessed", {
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
  });

  res.json({
    message: "Hello from Node.js + TypeScript!",
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
  });
});

export default router;
