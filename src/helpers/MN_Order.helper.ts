import { Order } from '../models/order';
import {MN_Order} from '../models/mn_order';
import { Assignment, Bid, Creator, Provider, Sell_Item, Soldier, Unit, User } from '../models';

export const findAll = () => {
    return MN_Order
     .findAll({
         attributes:["id"],
        include:[
           {
               model:User,
               as:"Customer"
           },
           {
               model:Order,
               //@ts-ignore
               include:[
                  {
                    model:Bid,
                    as:"Bids",
                    include:[
                        Sell_Item
                    ],            
                  },
                  {
                      model:Sell_Item,
                      attributes:{
                          exclude:["sub_order","provider","creator","unit"]//,""]
                      },
                      include:[
                          {
                          model:Provider,
                          as:"Provider"
                          },
                          {
                             model:Creator,
                             as:"Creator" 
                          },
                         {
                             model:Unit,
                             as:"Unit"
                         } 
                      ]
                  },
                  {
                      model:Bid,
                      as:"Win_bid"
                  }
               ],
               attributes:["id","document_created","erp_order","erp_req","invc","need","schedule","start_date","is_invitor","is_cmdr"]
           }
        ]
     });
}

export const post_order = (details:object) => {  
     return MN_Order.create(details).then((main_order:MN_Order) => {
        //@ts-ignore
       return main_order.createOrder(details.Order);
     }).then((order:Order) => {
         //@ts-ignore
        return Promise.all(details.Order.Sell_items.map(sell => {
            //@ts-ignore
            return order.createSell_item(sell);
        }))
       }).then(() => {
           return "created";
       });
}

export const find_one = (id:number) => {
 return MN_Order.findOne({where:{
     id    
    }});
}