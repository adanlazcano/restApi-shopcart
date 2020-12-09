import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';

import productRoutes from './routes/product.routes';

const app = express();
//settings
app.set('port', config.PORT);
//middlewares
const corsOptions = {
    //     origin: `http://${config.HOST}/${config.PORT}`//
}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/api/products', productRoutes);

module.exports = app;