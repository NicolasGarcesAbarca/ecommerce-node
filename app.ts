import path,{dirname} from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { fileURLToPath } from 'url';
import { error } from './controller/error.js';
import 'dotenv/config'

export const app = express();

declare global{
    var appRoot:string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.appRoot = path.resolve(__dirname);

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use(error.get404);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log(process.env);
});
