import { NOW } from 'sequelize';
import { Model,INTEGER,BOOLEAN,STRING,DATEONLY } from 'sequelize'
import sequelize from './init';
import {Bid} from "../models/bid";
export class Order extends Model {

}

Order.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    //bim_commander: {type:INTEGER},
    //professional_at1: {type:INTEGER},
    //professional_at2: {type:INTEGER},
    //mn_order: {type:INTEGER},
    document_created: {type:BOOLEAN},
    //status: {type:INTEGER, defaultValue:2},
    //bd: {type:INTEGER},
    erp_order: {type:STRING(12)},
    erp_req: {type:STRING(6)},
    invc: {type:STRING},
    //order_type: {type:INTEGER},
    //procument_type: {type:INTEGER},
    //pulling_bag: {type:INTEGER},
    need: {type:STRING},
    //paka: {type:INTEGER},
    //budget: {type:INTEGER},
    schedule: {type:DATEONLY},
    //assignment_id: {type:INTEGER},
    start_date: {type:DATEONLY, defaultValue:NOW},
    //invitor: {type:INTEGER}, unnessecery..
    //professional_empl: {type:INTEGER}, also..
    is_invitor: {type:BOOLEAN},
    is_cmdr: {type:BOOLEAN},
    // win_bid:{
    //   type: INTEGER,
    //   references: {
    //     model: Bid, // Can be both a string representing the table name or a Sequelize model
    //     key: 'bid_id'
    //   }
    // }
  },
  { sequelize, modelName: 'Order' }
)

