import {NextFunction, Request, Response} from "express";
import * as sellitem_helper from '../helpers/sell_item.helper';
import * as order_helper from '../helpers/Order.helper';


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


// if ((Status.id == 1 ) ||  ((1 < Status.id <= 4) && (User.user_rank <= 1))
export let delete_sellItem = async (req:Request, res:Response) => {

    try{
    let sellItem = parseInt(req.params.id);
    let status_sellItem = await order_helper.get_status(sellItem);

    if(((status_sellItem) == 1) || (status_sellItem <= 4))
    sellitem_helper.delete_sellItem(sellItem).then((bid) => res.status(200).json({message:"sell Item was deleted"})).catch((error) => res.status(400).json({message:"sell Item cannot be deleted"}));
    else
    res.status(404).json();
    }
    catch(e){
     res.status(500).json({e});
    }
}