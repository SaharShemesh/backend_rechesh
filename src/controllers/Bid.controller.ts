import {NextFunction, Request, Response} from "express";
import * as bid_helper from '../helpers/Bid.helpers';

export let get_all = (req:Request, res:Response) => {
        bid_helper.findAll().then((bid) => res.status(200).json(bid)).catch((error) => res.status(400).json({error}));
}


export let post_bid = async (req:Request, res:Response) => {
    try{
   let bid = await bid_helper.post_bid(req.body);
    res.status(201).json({message:"created bid",bid});
    }
    catch(e){
     res.status(400).json({e});
    }

}

export let get_bid = async (req:Request, res:Response, next:NextFunction) => {
      let bid_id = parseInt(req.params.id);
      let bid = await bid_helper.find_one(bid_id);
      if(!bid)
         res.status(404).json({message:"bid was not found"});
      else
        res.status(200).json(bid);

}

export let delete_bid = (req:Request, res:Response) => {
        //if rank.user == manager && status>=3
        // else return error

        let bid_id = parseInt(req.params.id);
        bid_helper.delete_bid(bid_id).then((bid) => res.status(200).json(bid)).catch((error) => res.status(400).json({error}));
}