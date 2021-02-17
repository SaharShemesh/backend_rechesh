import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class Unit extends Model {

}

Unit.init(
  {
    unit_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    unit: {type:STRING}
  },
  { sequelize, modelName: 'unit' }
)
