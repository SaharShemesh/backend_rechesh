import {NextFunction, Request, Response} from "express";
import * as user_helper from '../helpers/user.helper';

export let get_all = (req:Request, res:Response) => {
        user_helper.findAll().then((users_co) => res.status(200).json(users_co)).catch((error) => res.status(400).json({error}));
}


export let create_user = async (req:Request, res:Response) => {

    try{
   let order = await user_helper.post_order(req.body);
    res.status(201).json({message:"created the user",order});
    }
    catch(e){
     res.status(400).json({e});
    }

}

export let get_user = async (req:Request, res:Response, next:NextFunction) => {
      let user_id = parseInt(req.params.id);
      let user = await user_helper.find_one(user_id);
      if(!user)
         res.status(404).json({message:"user was not found"});
      else
        res.status(200).json(user);
}