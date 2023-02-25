import express,{ Response,Request} from "express";

const router = express.Router();

const products:Array<{title:string}> = [];

router.get('/add-product', (req:Request, res:Response) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  }); 
});

router.post('/add-product', (req:Request, res:Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export default router;

type getProducts = Array<{title:string}>;

export function getProducts():getProducts{
  return products;
};
