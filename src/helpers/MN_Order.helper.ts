import { Order } from '../models/order';
import {MN_Order} from '../models/mn_order';

export const findAll = () => {
   return MN_Order
    .findAll({ include: {model:Order, attributes:["id"]} })
}

export const post_order = (details:object) => {
    //  return MN_Order.create(details).then((main_order:MN_Order) => {
    //      //@ts-ignore
    //     return main_order.createOrder(details.Order)
    //  }).catch(() => {
    //     return null;
    //  }).then( res => {
    //      return "created";
    //  });
}

export const find_one = (id:number) => {
 return MN_Order.findOne({where:{
     id    
    }});
}