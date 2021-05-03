import { Express, Response, Request } from "express";
import * as main_orders from "./MN_order.route";
import * as sell_item from "./sell_item.route";
import * as order_route from "./order.route";
import * as user_route from "./user.route";
//collections here!!
import * as procument_route from "./procument_Type.route";
import * as assignment_route from "./assignment.route";
import * as budgetType_route from "./budget_Type.route";
import * as orderType_route from "./order_Type.route";
import * as pakaType_route from "./paka_Type.route";
import * as priority_route from "./priority.route";
import * as priorityType_route from "./priorityType.route";
import * as provider_route from "./provider.route";
import * as status_route from "./status.route";
import * as unit_route from "./unit.route";
import * as userPermissions_route from "./userPermissions.route";
import * as userRoles_route from "./userRoles.route";
import * as baseHierarchy_route from "./base_Hierarchy.route";
import * as constants_route from "./constants.route";
import * as creator_route from "./creator.route";
import * as file_route from "./file.route";
import * as paka_route from "./paka.route";
import * as pullingBag_route from "./pulling_Bag.controller";
import * as soldier_route from "./soldier.route";
import * as statusHistory_route from "./status_History.route";

export function initRoutes(app: Express) {
  app.get("/api", (request: Request, response: Response) => {
    response.end("welcome to the rechesh");
  });
  //model routing
  app.use("/api/Main-Orders", main_orders.plural_router);
  app.use("/api/Main-Order", main_orders.singular_router);

  app.use("/api/Main-Orders/:req_id/order", order_route.singular_router);
  app.use("/api/Main-Orders/:req_id/orders", order_route.plural_router);

  app.use("/api/User", user_route.singular_router);
  app.use("/api/Users", user_route.plural_router);

  app.use(
    "/api/Main-Order/:order_id/order/:sub_id/sell-items",
    sell_item.plural_router,
  );
  app.use(
    "/api/Main-Order/:order_id/order/:sub_id/sell-item",
    sell_item.singular_router,
  );
  ///collections here!!

  //procument Type
  app.use("/api/Procument-Type", procument_route.singular_router);
  app.use("/api/Procument-Types", procument_route.plural_router);

  //Assignment
  app.use("/api/Assignment", assignment_route.singular_router);
  app.use("/api/Assignments", assignment_route.plural_router);

  //Budget Type
  app.use("/api/Budget-Type", budgetType_route.singular_router);
  app.use("/api/Budget-Types", budgetType_route.plural_router);

  //Order Type
  app.use("/api/Order-Type", orderType_route.singular_router);
  app.use("/api/Order-Types", orderType_route.plural_router);

  //Paka Type
  app.use("/api/Paka-Type", pakaType_route.singular_router);
  app.use("/api/Paka-Types", pakaType_route.plural_router);

  //Priority
  app.use("/api/Priority", priority_route.singular_router);
  app.use("/api/Priorities", priority_route.plural_router);

  //Priority Type
  app.use("/api/Priority-Type", priorityType_route.singular_router);
  app.use("/api/Priority-Types", priorityType_route.plural_router);

  //Provider
  app.use("/api/Provider", provider_route.singular_router);
  app.use("/api/Providers", provider_route.plural_router);

  //Status
  app.use("/api/Status", status_route.singular_router);
  app.use("/api/Statuses", status_route.plural_router);

  //Unit
  app.use("/api/Unit", unit_route.singular_router);
  app.use("/api/Units", unit_route.plural_router);

  //User Premissions
  app.use("/api/User-Permissions", userPermissions_route.singular_router);
  app.use("/api/Users-Permissions", userPermissions_route.plural_router);

  //User Roles
  app.use("/api/User-Roles", userRoles_route.singular_router);
  app.use("/api/Users-Roles", userRoles_route.plural_router);

  //Base Hierarchy
  app.use("/api/Base-Hierarchy", baseHierarchy_route.singular_router);
  app.use("/api/Base-Hierarchies", baseHierarchy_route.plural_router);

  //Constants
  app.use("/api/Constants", constants_route.singular_router);
  app.use("/api/System-Constants", constants_route.plural_router);

  //Creator
  app.use("/api/Creator", creator_route.singular_router);
  app.use("/api/Creators", creator_route.plural_router);

  //File
  app.use("/api/File", file_route.singular_router);
  app.use("/api/Files", file_route.plural_router);

  //Paka
  app.use("/api/Paka", paka_route.singular_router);
  app.use("/api/Pakas", paka_route.plural_router);

  //Pulling Bag
  app.use("/api/Pulling-Bag", pullingBag_route.singular_router);
  app.use("/api/Pulling-Bags", pullingBag_route.plural_router);

  //Soldier
  app.use("/api/Soldier", soldier_route.singular_router);
  app.use("/api/Soldiers", soldier_route.plural_router);

  //Status History
  app.use("/api/Status-History", statusHistory_route.singular_router);
  app.use("/api/Status-Histories", statusHistory_route.plural_router);
}
