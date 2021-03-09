import express,{Request, Response} from 'express'
import {get_all} from "../controllers/sell_item.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
  //
  //
//plural router
plural_router.get("/",get_all);



export {singular_router,plural_router};