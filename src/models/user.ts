import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class User extends Model {

}

User.init(
  {
    id_num: {type:STRING,primaryKey:true,autoIncrement:true},
    user_rank: {type:INTEGER},
    name: {type:STRING},
    phone: {type:STRING},
    bim: {type:INTEGER},
    department: {type:INTEGER},
    user_typeid: {type:INTEGER},
  },
  { sequelize, modelName: 'User' }
)
