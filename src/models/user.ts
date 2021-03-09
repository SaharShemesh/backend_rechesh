import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';
import { MN_Order } from './mn_order';
import { Order } from './order';


export class User extends Model {

}

User.init(
  {
    id_num: {type:INTEGER,primaryKey:true,autoIncrement:true},
    user_rank: {type:INTEGER},
    name: {type:STRING},
    phone: {type:STRING},
    bim: {type:INTEGER},
    department: {type:INTEGER},
    user_typeid: {type:INTEGER},
  },
  { sequelize, modelName: 'user' }
)

