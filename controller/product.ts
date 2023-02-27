import { Request, Response } from 'express';

export const product={
    async getAll(_req:Request, res:Response){
        res.render('add-product', {
          pageTitle: 'Add Product',
          path: '/admin/add-product',
          formsCSS: true,
          productCSS: true,
          activeAddProduct: true
        }); 
      }
}

