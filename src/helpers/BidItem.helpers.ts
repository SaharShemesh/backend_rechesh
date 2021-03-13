import {Bid_Item} from '../models/bid_item';

export const findAll = () => {
   return Bid_Item
    .findAll({ include: [{ all: true }] })
}

export const post_bidItem = (details:object) => {
   
     return Bid_Item.create(details);
}

export const find_one = (id:number) => {
 return Bid_Item.findOne({where:{
     id    
    }});
}