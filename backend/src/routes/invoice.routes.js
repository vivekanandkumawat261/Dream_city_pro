import express from "express";
import { getInvoicesByUser } from "../controllers/invoice.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyJWT, getInvoicesByUser);

export default router;
