import express, { Request, Response } from "express";
import { update_soldiers } from "../controllers/soldier.controller";
import {
  get_user,
  get_all,
  update_users,
} from "../controllers/user.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
singular_router.get("/:id", get_user);
//
//plural router
plural_router.get("/", get_all);
plural_router.put("/", update_users, update_soldiers, get_all);

export { singular_router, plural_router };
