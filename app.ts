import path,{dirname} from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin';
import shopRoutes from './routes/shop';
import apiRoutes from './routes/api';

import { error } from './controller/error';
import 'dotenv/config'

export const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);
app.use('/api', apiRoutes);
app.use(error.get404);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log(process.env);
});
