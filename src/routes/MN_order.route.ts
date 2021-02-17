import express,{Request, Response} from 'express'
import {get_all,post_order, get_order} from "../controllers/MN_order.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
singular_router.post("/",post_order);
singular_router.get("/:id",get_order);
  //
//plural router
plural_router.get("/",get_all);



export {singular_router,plural_router};