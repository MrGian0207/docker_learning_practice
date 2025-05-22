import { Router } from "express";

import helloRoute from "./hello.route";
import healthRoute from "./health.route";

const router = Router();

router.use("/api", helloRoute);
router.use("/api", healthRoute);

export default router;
