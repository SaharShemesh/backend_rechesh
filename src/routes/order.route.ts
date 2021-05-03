import express, { Request, Response } from "express";

import { create_order, update_order } from "../controllers/order.controller";
const singular_router = express.Router({ mergeParams: true });
const plural_router = express.Router({ mergeParams: true });

//singular router
singular_router.post("/", create_order);
singular_router.put("/:order_id", update_order);
//plural router

export { singular_router, plural_router };
