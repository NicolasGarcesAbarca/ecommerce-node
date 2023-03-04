import { getProductById, getProducts } from '../model/product';
import { Request, Response } from 'express';

export const shop = {
  getProducts(_req: Request, res: Response) {
    const products = getProducts();
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });

  },
  getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const product = getProductById(id);
    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Product Detail',
      path: '/products'// in navigation will be highlighted
    });

  },
  getIndex(_req: Request, res: Response) {
    const products = getProducts();
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  },
  getCart(_req: Request, res: Response) {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
    });
  },
  getOrders(_req: Request, res: Response) {
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
    });
  },
  getCheckout(_req: Request, res: Response) {
    res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
    });
  },
  postCart(req: Request, res: Response) {
    const { productId } = req.body;
    console.log(productId);
    res.redirect('/cart');
  },
  postCartDeleteProduct(req:Request, res:Response){
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart');
  }
}