import express from "express";
import { getCartByUser, addToCart } from "../controllers/cart.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyJWT, getCartByUser);
router.post("/add", verifyJWT, addToCart);

export default router;
