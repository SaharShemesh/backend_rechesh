import { Model,INTEGER,BOOLEAN,STRING, } from 'sequelize'
import { Bid } from './bid';
import sequelize from './init';
import { Order } from './order';

export class Sell_Item extends Model {

}

Sell_Item.init(
  {
    item_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    sub_order: {type:INTEGER},
    desc: {type:STRING},
    iaf_num: {type:STRING},
    technical_spec: {type:BOOLEAN},
    makat: {type:STRING},
    providor: {type:INTEGER},
    creator: {type:INTEGER},
    quantity: {type:INTEGER},
    unit: {type:INTEGER},
    price: {type:INTEGER}
  },
  { sequelize, modelName: 'Sell_item' }
)

