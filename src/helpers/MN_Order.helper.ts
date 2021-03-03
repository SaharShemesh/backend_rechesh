import { Order } from '../models/order';
import {MN_Order} from '../models/mn_order';

export const findAll = () => {
   return MN_Order
    .findAll({ include: {model:Order, attributes:["id"]} })
}

export const post_order = (details:object) => {
     return MN_Order.create(details,{
          include:[{model:Order}]
     });
}

export const find_one = (id:number) => {
 return MN_Order.findOne({where:{
     id    
    }});
}