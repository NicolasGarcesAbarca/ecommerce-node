import { Request, Response } from 'express';
import { getProducts, addProduct } from '../model/product';

export const admin = {
  getAddProduct(_req: Request, res: Response) {
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
    });
  },
  postAddProduct(req: Request, res: Response) {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const id = Math.random().toString();
    addProduct({ id, title, imageUrl, price, description });
    res.redirect('/');
  },
  getProducts(_req: Request, res: Response) {
    const prods = getProducts();
    res.render('admin/products', {
      prods,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });

  },
  editProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const product = getProducts().find((p) => p.id === productId);
    if (!product) {
      return res.redirect('/');
    }
    const { edit } = req.query;
    if (!edit) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: 'admin/edit-product',
      edit,
      product,
    });
  },
  postEditProduct(req: Request, res: Response) {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    //save to db
    console.log(prodId, updatedTitle, updatedPrice, updatedImageUrl, updatedDesc);
    res.redirect('/admin/products');
  },
  getEditProduct(req: Request, res: Response) {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    if (!prodId) {
      return res.redirect('/');
    }
    const product = getProducts().find((p) => p.id === prodId);
    
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });

  },
  postDeleteProduct(req:Request, res:Response){
    const prodId = req.body.productId;
    //delete from db
    res.redirect('/admin/products');
  }
}
