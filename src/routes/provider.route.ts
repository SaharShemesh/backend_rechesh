import express from "express";
import {
  get_all,
  get_one,
  create_one,
} from "../controllers/provider.controller";
import { update_providers } from "../controllers/provider.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
//
singular_router.get("/:id", get_one);
singular_router.post("/", create_one);
//
//plural router
plural_router.get("/", get_all);
plural_router.put("/", update_providers, get_all);

export { singular_router, plural_router };
