import express from "express";
import { admin } from "../controller/admin";

const router = express.Router();
router.get('/add-product', admin.getAddProduct);
router.post('/add-product', admin.postAddProduct);
router.get('/products', admin.getProducts);
router.get('/edit-product/:productId', admin.editProduct);
router.post('/edit-product', admin.postEditProduct);
router.get('/delete-product', admin.postDeleteProduct);
export default router;