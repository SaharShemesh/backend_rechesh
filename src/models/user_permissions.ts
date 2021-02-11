import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class User_Permissions extends Model {

}

User_Permissions.init(
  {
    permission_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    permission: {type:STRING},
  },
  { sequelize, modelName: 'User_permissions' }
)
