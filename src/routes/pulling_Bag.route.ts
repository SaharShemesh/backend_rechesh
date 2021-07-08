import express from "express";
import {
  get_all,
  get_one,
  create_one,
  update_bags,
  create_bags,
  get_created,
  delete_bag,
} from "../controllers/pullingBag.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
//
singular_router.get("/:id", get_one);
singular_router.post("/", create_one);
//
//plural router
plural_router.get("/", get_all);
plural_router.put("/", update_bags, get_all);
plural_router.post("/", create_bags, get_created);
plural_router.delete("/:bag_id", delete_bag);
export { singular_router, plural_router };
