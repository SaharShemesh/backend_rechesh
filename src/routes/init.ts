import { Express, Response, Request } from "express";
import * as main_orders from "./MN_order.route";
import * as sell_item from "./sell_item.route";
import * as order_route from "./order.route";
import * as user_route from "./user.route";
import * as bid_route from "./Bid.route";
//collections here!!
import * as procument_route from "./procument_Type.route";

export function initRoutes(app: Express) {
  app.get("/api", (request: Request, response: Response) => {
    response.end("welcome to the rechesh");
  });
  //model routing
  app.use("/api/Main-Orders", main_orders.plural_router);
  app.use("/api/Main-Order", main_orders.singular_router);

  app.use("/api/Main-Order/:req_id/order", order_route.singular_router);
  app.use("/api/Main-Order/:req_id/orders", order_route.plural_router);

  app.use(
    "/api/Main-Order/:order_id/order/:sub_id/sell-items",
    sell_item.plural_router,
  );
  app.use(
    "/api/Main-Order/:order_id/order/:sub_id/sell-item",
    sell_item.singular_router,
  );

  app.use(
    "/api/Main-Order/:order_id/order/:sub_id/bids",
    bid_route.plural_router,
  );
  app.use(
    "/api/Main-Order/:order_id/order/:sub_id/bid",
    bid_route.singular_router,
  );
  ///collections here!!
  app.use("/api/Procument-Type", procument_route.singular_router);
  app.use("/api/Procument-Types", procument_route.plural_router);

  app.use("/api/user", user_route.singular_router);
}
