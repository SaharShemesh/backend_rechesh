import {MN_Order} from '../models/mn_order';

export const findAll = () => {
   return MN_Order
    .findAll({ include: [{ all: true }] })
}

export const post_order = (details:object) => {
   
     return MN_Order.create(details);
}

export const find_one = (id:number) => {
 return MN_Order.findOne({where:{
     id    
    }});
}

export const delete_order = (id:number) => {
    return MN_Order.destroy({where:{
    id    
   }});
}