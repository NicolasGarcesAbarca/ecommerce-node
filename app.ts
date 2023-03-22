import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import apiRoutes from './routes/api.js';

import { error } from './controller/error.js';
import 'dotenv/config'

export const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/admin', adminRouter);
app.use(shopRoutes);
app.use('/api', apiRoutes);
app.use(error.get404);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    // process.env is available thanks to dotenv
    // console.log(process.env);
});
