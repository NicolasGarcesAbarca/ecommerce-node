import express,{Response,Request, NextFunction } from "express";
import { getProducts } from "./admin.js";
const router = express.Router();

router.get('/', (req:Request, res:Response<any>, next:NextFunction) => {
  const products = getProducts();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});
export default router;
