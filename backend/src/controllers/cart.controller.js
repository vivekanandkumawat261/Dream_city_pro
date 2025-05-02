import { Cart } from "../models/cart.model.js";
import { CartItem } from "../models/cartItem.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getCartByUser = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id, status: 'active' });
  return res.status(200).json(new ApiResponse(200, cart, "Cart fetched"));
});

export const addToCart = asyncHandler(async (req, res) => {
  const { cityId, product, price } = req.body;
  let cart = await Cart.findOne({ userId: req.user._id, status: 'active' });

  if (!cart) {
    cart = await Cart.create({ userId: req.user._id });
  }

  const cartItem = await CartItem.create({ cartId: cart._id, cityId, product, price });
  return res.status(201).json(new ApiResponse(201, cartItem, "Item added to cart"));
});
