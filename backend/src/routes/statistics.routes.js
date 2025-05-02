import express from "express";
import { getCityStatistics } from "../controllers/statistics.controller.js";

const router = express.Router();

router.get("/:cityId", getCityStatistics);

export default router;
