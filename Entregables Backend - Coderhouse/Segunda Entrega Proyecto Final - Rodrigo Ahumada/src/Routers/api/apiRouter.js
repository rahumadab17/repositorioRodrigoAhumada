import express from 'express';
import { productsRouter } from './productsRouter.js';
import { cartsRouter } from './cartsRouter.js';

export const apiRouter = express.Router();

apiRouter.use('/products', productsRouter);
apiRouter.use('/carts', cartsRouter);