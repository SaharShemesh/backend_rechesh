import { Model,INTEGER, STRING } from 'sequelize'
import sequelize from './init';

export class Creator extends Model {

}

Creator.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    creator_name: {type:STRING},
    creator_num: {type:STRING}
  },
  { sequelize, modelName: 'creator' }
)
