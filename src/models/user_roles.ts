import { Model,INTEGER,STRING, } from 'sequelize'
import sequelize from './init';

export class User_Roles extends Model {

}

User_Roles.init(
  {
    user_rank: {type:INTEGER,primaryKey:true,autoIncrement:true},
    role: {type:STRING},
  },
  { sequelize, modelName: 'User_roles' }
)
