import { getProducts } from '../model/product.js';
import { Request, Response } from 'express';

export const shop={
    getProducts(_req:Request, res:Response){
        const products = getProducts();
          res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
          });
       
      },
      getIndex(_req:Request, res:Response){
        const products = getProducts();
          res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
          });
      },
      getCart(_req:Request, res:Response){
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart'
        });
      },
      getOrders(_req:Request, res:Response){
        res.render('shop/orders', {
          path: '/orders',
          pageTitle: 'Your Orders'
        });
      },
      getCheckout(_req:Request, res:Response){
        res.render('shop/checkout', {
          path: '/checkout',
          pageTitle: 'Checkout'
        });
      }
      
}