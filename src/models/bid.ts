import { Model,INTEGER } from 'sequelize'
import { Bid_Item } from './bid_item';
import sequelize from './init';
import { Order } from './order';
import { Sell_Item } from './sell_item';

export class Bid extends Model {

}

Bid.init(
  {
    bid_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    order: {type:INTEGER},
    providor: {type:INTEGER},
    invitor: {type:INTEGER},
    bim_commander: {type:INTEGER},
    professional_empl: {type:INTEGER},
  },
  { sequelize, modelName: 'bid' }
)

