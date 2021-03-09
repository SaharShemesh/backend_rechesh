import {NextFunction, Request, Response} from "express";
import * as order_helper from '../helpers/MN_Order.helper';

export let get_all = (req:Request, res:Response) => {
        order_helper.findAll().then((main_orders) => res.status(200).json(main_orders)).catch((error) => res.status(400).json({error}));
}


export let post_order = async (req:Request, res:Response) => {
    try{
   let order = await order_helper.post_order(req.body);
    res.status(201).json({message:"created the main order",order});
    }
    catch(e){
     res.status(400).json({e});
    }
    console.log(req.body);
}

export let get_order = async (req:Request, res:Response, next:NextFunction) => {
      let order_id = parseInt(req.params.id);
      let order = await order_helper.find_one(order_id);
      if(!order)
         res.status(404).json({message:"order was not found"});
      else
        res.status(200).json(order);
}

export let is_order = async (req:Request, res:Response, next:NextFunction) => {
        let order_id = parseInt(req.params.id);
        let order = await order_helper.find_one(order_id);
        if(!order)
           res.status(404).json({message:"order was not found"});
        next();
  }