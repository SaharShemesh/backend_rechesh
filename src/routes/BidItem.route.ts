import express,{Request, Response} from 'express'
import {get_all,post_bidItem,get_bidItem} from "../controllers/BidItem.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
singular_router.post("/",post_bidItem);
singular_router.get("/:id",get_bidItem);
  //
//plural router
plural_router.get("/",get_all);



export {singular_router,plural_router};