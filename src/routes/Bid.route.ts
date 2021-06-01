import express, { Request, Response } from "express";
import * as bidController from "../controllers/Bid.controller";
const singular_router = express.Router({ mergeParams: true });
const plural_router = express.Router({ mergeParams: true });

//singular router
//
//plural router
plural_router.post("/", bidController.post_bids);

export { singular_router, plural_router };
