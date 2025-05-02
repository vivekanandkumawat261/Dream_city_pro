import express from "express";
import { createAccessToken } from "../controllers/token.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", verifyJWT, createAccessToken);

export default router;
