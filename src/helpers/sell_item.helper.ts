import {Sell_Item} from '../models/sell_item';

export const findAll = (sub_order:number) => {
   return Sell_Item
    .findAll({where:{
        sub_order
    }, include: [{ all: true }] })
}

export const delete_sellItem = (id:number) => {
    return Sell_Item.destroy({where:{
          id    
          }});

}
