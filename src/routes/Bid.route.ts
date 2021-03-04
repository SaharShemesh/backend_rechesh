import express,{Request, Response} from 'express'
import * as bidController from "../controllers/Bid.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
singular_router.post("/",bidController.post_bid); 
singular_router.get("/:id",bidController.get_bid);
singular_router.delete("/:id",bidController.delete_bid);
  //
//plural router
plural_router.get("/",bidController.get_all);



export {singular_router,plural_router};