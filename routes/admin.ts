import express from "express";
import { admin } from "../controller/admin.js";

const router = express.Router();
router.get('/add-product', admin.getAddProduct);
router.post('/add-product', admin.postAddProduct);
router.get('/products', admin.getProducts);

export default router;