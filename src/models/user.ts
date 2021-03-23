import { Model,INTEGER,STRING, INET } from 'sequelize'
import sequelize from './init';
import { MN_Order } from './mn_order';
import { Order } from './order';


export class User extends Model {

}

User.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    user_rank: {type:INTEGER},
    phone: {type:STRING},
    //location_id: {type:INTEGER},
    //department: {type:INTEGER},
    //user_typeid: {type:INTEGER},
  },
  { sequelize, modelName: 'user' }
)
