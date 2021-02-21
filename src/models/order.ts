import { Model,INTEGER,BOOLEAN,STRING,DATEONLY } from 'sequelize'
import { Bid } from './bid';
import sequelize from './init';
import { MN_Order } from './mn_order';
import { Sell_Item } from './sell_item';

export class Order extends Model {

}

Order.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    bim_commander: {type:INTEGER},
    professional_at1: {type:INTEGER},
    professional_at2: {type:INTEGER},
    mn_order: {type:INTEGER},
    document_created: {type:BOOLEAN},
    status: {type:INTEGER},
    bd: {type:INTEGER},
    erp_order: {type:STRING(12)},
    erp_req: {type:STRING(6)},
    invc: {type:STRING},
    order_type: {type:INTEGER},
    procument_type: {type:INTEGER},
    pulling_bag: {type:INTEGER},
    need: {type:STRING},
    paka: {type:INTEGER},
    budget: {type:INTEGER},
    schedule: {type:DATEONLY},
    assignment_id: {type:INTEGER},
    start_date: {type:DATEONLY},
    invitor: {type:INTEGER},
    professional_empl: {type:INTEGER},
    is_invitor: {type:BOOLEAN},
    is_cmdr: {type:BOOLEAN},
  },
  { sequelize, modelName: 'Order' }
)

