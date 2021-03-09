import {Bid} from '../models/bid';
import {Status} from '../models/status'
import {User} from '../models/user'

export const findAll = () => {
   return Bid
    .findAll({ include: [{ all: true }] })
}

export const post_bid = (details:object) => {
   
     return Bid.create(details);
}

export const find_one = (id:number) => {
 return Bid.findOne({where:{
     id    
    }});
}

export const delete_bid = (id:number) => {
            return Bid.destroy({where:{
                  id    
                  }});
      
}