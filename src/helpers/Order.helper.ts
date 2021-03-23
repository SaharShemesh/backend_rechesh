import { Sell_Item } from '../models';
import {Order} from '../models/order';
import * as sell_Item_helper from '../helpers/sell_item.helper'
import * as Status_helper from '../helpers/status.helper'

export const findAll = () => {
   return Order
    .findAll({ include: [{ all: true }] })
}
sell_Item_helper.validate_sellItem(3, 1).then((r) => {
    console.log(r);
}).catch((e) => {
   console.log(e);
})
export const post_order = async (mainOrder_id:number ,details:object) => { 
    try {
        //@ts-ignore
        for (sell_item_id of details.sell_items) {
            //@ts-ignore
            await sell_Item_helper.validate_sellItem(mainOrder_id, sell_item_id)
        }
          
    }
    catch {

    }
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