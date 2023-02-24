import path,{dirname} from 'path';
import express, { Express, Request, Response ,NextFunction} from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { fileURLToPath } from 'url';

const app = express();

declare global{
    var appRoot:string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.appRoot = path.resolve(__dirname);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use((req:Request, res:Response, next:NextFunction) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
