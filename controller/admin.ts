import { Request, Response } from 'express';
import { getProducts,addProduct } from '../model/product.js';

export const admin={
    getAddProduct(_req:Request, res:Response){
        res.render('admin/add-product', {
          pageTitle: 'Add Product',
          path: '/admin/add-product',
          formsCSS: true,
          productCSS: true,
          activeAddProduct: true
        });
      },
      postAddProduct(req:Request, res:Response){
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const price = req.body.price;
        const description = req.body.description;
        addProduct({title, imageUrl, price, description});
        res.redirect('/');
      },
      getProducts(req:Request, res:Response){
        const prods = getProducts();
        res.render('admin/products', {
            prods: prods,
            pageTitle: 'Admin Products',
            path: '/admin/products'
          });
       
      }
}