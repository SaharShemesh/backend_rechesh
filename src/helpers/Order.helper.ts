import {Order} from '../models/order';

export const findAll = () => {
   return Order
    .findAll({ include: [{ all: true }] })
}

export const post_order = (details:object) => {
     return Order.create(details);
}

export const find_one = (id:number) => {
 return Order.findOne({where:{
     id    
    }});
}

export const get_status = (id:number) => {
    return Order.findOne({where:{
        attributes: ['id', 'status']
        //@ts-ignore
       }}).then((order:Order) => order.status).catch();
   }