import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class Priority extends Model {

}

Priority.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    priority_name: {type:STRING}
  },
  { sequelize, modelName: 'priority' }
)
