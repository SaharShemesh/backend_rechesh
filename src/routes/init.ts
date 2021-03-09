import {Express, Response, Request} from 'express'
import * as main_orders from './MN_order.route';
import * as sell_item from './sell_item.route';
export function initRoutes(app:Express){
     app.get("/api",(request:Request,response:Response) => {
          response.end("welcome to the rechesh");
     })
     //model routing
     app.use("/api/Main-Orders", main_orders.plural_router);
     app.use("/api/Main-Order", main_orders.singular_router);

     app.use("/api/Main-Order/:order_id/order/:sub_id/sell-items",sell_item.plural_router)
     app.use("/api/Main-Order/:order_id/order/:sub_id/sell-items",sell_item.singular_router)
}