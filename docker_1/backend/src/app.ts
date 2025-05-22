import express from "express";
import cors from "cors";

import routes from "./routes/index";

import { requestIdMiddleware } from "middleware/requestId";
import { errorHandler } from "middleware/errorHandler";
import { morganLogger } from "middleware/morganLogger";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morganLogger);
app.use(requestIdMiddleware);

app.use(routes);

app.use("/{*path}", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    requestId: req.requestId,
  });
});

app.use(errorHandler);

export default app;
