import express from "express";
import { shop } from "../controller/shop.js";
const router = express.Router();

router.get('/', shop.getIndex);
router.get('/products', shop.getProducts);
router.get('/cart', shop.getCart);
router.get('/orders', shop.getOrders);
router.get('/checkout', shop.getCheckout);

export default router;
