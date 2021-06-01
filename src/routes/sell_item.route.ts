import express, { Request, Response } from "express";
import {
  get_all,
  delete_sellItem,
  put_items,
  post_items,
} from "../controllers/sell_item.controller";
const singular_router = express.Router({ mergeParams: true });
const plural_router = express.Router({ mergeParams: true });

//singular router
//
singular_router.delete("/:id", delete_sellItem);
//
//plural router
plural_router.get("/", get_all);
plural_router.put("/", put_items);
plural_router.post("/", post_items);
export { singular_router, plural_router };
