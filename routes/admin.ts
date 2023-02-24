import path from "path";
import express,{ Express,Response,Request, NextFunction } from "express";

const router = express.Router();

const products:Array<{title:string}> = [];

// /admin/add-product => GET
router.get('/add-product', (req:Request, res:Response) => {
  res.sendFile(path.join(appRoot, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req:Request, res:Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export default router;

type getProducts = Array<{title:string}>;

export function getProducts():getProducts{
  return products;
};
