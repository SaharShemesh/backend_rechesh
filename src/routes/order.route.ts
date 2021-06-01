import express, { Request, Response } from "express";

import {
  create_order,
  update_order,
  confirm_order,
  return_customer,
} from "../controllers/order.controller";
import { user_info } from "../controllers/user.controller";
const singular_router = express.Router({ mergeParams: true });
const plural_router = express.Router({ mergeParams: true });

//singular router
singular_router.post("/", create_order);
singular_router.put("/:order_id", update_order);
singular_router.post(
  "/:order_id/action/confirm-order",
  user_info,
  confirm_order,
);
singular_router.post(
  "/:order_id/action/return-customer",
  //user_info,
  return_customer,
);
//plural router

export { singular_router, plural_router };
