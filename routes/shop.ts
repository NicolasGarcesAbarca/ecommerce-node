import path from "path";
import express,{ Express,Response,Request, NextFunction } from "express";

const router = express.Router();

router.get('/', (req:Request, res:Response<any>, next:NextFunction) => {
  res.sendFile(path.join(appRoot, 'views', 'shop.html'));
});

export default router;
