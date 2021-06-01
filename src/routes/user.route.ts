import express, { Request, Response } from "express";
import { get_user } from "../controllers/user.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
singular_router.get("/:id", get_user);
//
//plural router

export { singular_router, plural_router };
