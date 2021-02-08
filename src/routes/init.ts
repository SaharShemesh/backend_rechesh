import {Express} from 'express'
import orderRouter from './order.route';

export function initRoutes(app:Express){
     app.use("/order", orderRouter);
}