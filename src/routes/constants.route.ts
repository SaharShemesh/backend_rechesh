import express from "express";
import {
  get_all,
  get_one,
  create_one,
  update_constants,
} from "../controllers/constants.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
//
singular_router.get("/:id", get_one);
singular_router.post("/", create_one);
//
//plural router
plural_router.get("/", get_all);
plural_router.put("/", update_constants, get_all);

export { singular_router, plural_router };
