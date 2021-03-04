import express,{Request, Response} from 'express'
import * as mnOrderController from "../controllers/MN_order.controller";
const singular_router = express.Router();
const plural_router = express.Router();

//singular router
singular_router.post("/",mnOrderController.post_order);
singular_router.get("/:id",mnOrderController.get_order);
singular_router.delete("/:id",mnOrderController.delete_order);

//plural router
plural_router.get("/",mnOrderController.get_all);

export {singular_router,plural_router};

