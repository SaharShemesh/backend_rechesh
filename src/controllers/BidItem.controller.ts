import {NextFunction, Request, Response} from "express";
import * as bidItem_helper from '../helpers/bidItem.helpers';

export let get_all = (req:Request, res:Response) => {
        bidItem_helper.findAll().then((bidItem) => res.status(200).json(bidItem)).catch((error) => res.status(400).json({error}));
}


export let post_bidItem = async (req:Request, res:Response) => {
    try{
   let bidItem = await bidItem_helper.post_bidItem(req.body);
    res.status(201).json({message:"created bidItem",bidItem});
    }
    catch(e){
     res.status(400).json({e});
    }

}

export let get_bidItem = async (req:Request, res:Response, next:NextFunction) => {
      let bidItem_id = parseInt(req.params.id);
      let bidItem = await bidItem_helper.find_one(bidItem_id);
      if(!bidItem)
         res.status(404).json({message:"bidItem was not found"});
      else
        res.status(200).json(bidItem);

}