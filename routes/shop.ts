import express from "express";
import { shop } from "../controller/shop";
const router = express.Router();

router.get('/', shop.getIndex);

router.get('/products', shop.getProducts);

// delete before /:id~~
router.get('/products/:id', shop.getProductById);

router.get('/cart', shop.getCart);

router.post('/cart', shop.postCart);

router.post('/cart-delete-item', shop.postCartDeleteProduct);

router.get('/orders', shop.getOrders);

router.get('/checkout', shop.getCheckout);

export default router;
