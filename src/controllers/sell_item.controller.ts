import {NextFunction, Request, Response} from "express";
import * as sellitem_helper from '../helpers/sell_item.helper';

export let get_all = async (req:Request,res:Response,next:NextFunction) => {
       try{
      let sell_items = await sellitem_helper.findAll(parseInt(req.params.sub_id));
          if(!sell_items)
             res.status(404).json({error:"not found"});
          else
             res.status(200).json(sell_items);
       }
    catch(error){
        return res.status(400).json({error}); 
    }
    next();
}