import express, { Request, Response } from "express";
import { get_all } from "../controllers/user.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
// singular_router.post("/",create_user);
// singular_router.get("/:id",get_user);
//
//plural router
plural_router.get("/", get_all);

export { singular_router, plural_router };
