import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class Status extends Model {

}

Status.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    status: {type:STRING}
  },
  { sequelize, modelName: 'status' }
)
