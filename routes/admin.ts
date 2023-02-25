import express,{ Response,Request} from "express";
import { product } from "../controller/product";
const router = express.Router();

const products:Array<{title:string}> = [];

router.get('/add-product',product.getAll );

router.post('/add-product', (req:Request, res:Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export default router;

type getProducts = Array<{title:string}>;

export function getProducts():getProducts{
  return products;
};
