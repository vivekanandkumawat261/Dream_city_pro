import express from "express";
import { getAllCities, getCityById } from "../controllers/city.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:id", getCityById);

export default router;
