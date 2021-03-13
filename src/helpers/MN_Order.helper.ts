import { Order } from '../models/order';
import {MN_Order} from '../models/mn_order';
import { Soldier, User } from '../models';

export const findAll = () => {
    return MN_Order
     .findAll({
         include:{all:true, nested:true}
     })
}

export const post_order = (details:object) => {
     return MN_Order.create(details).then((main_order:MN_Order) => {
        //@ts-ignore
       return main_order.createOrder(details.Order);
     }).then((order:Order) => {
        return order;
     })
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