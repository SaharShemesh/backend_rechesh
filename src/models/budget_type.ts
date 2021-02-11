import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class Budget_Type extends Model {

}

Budget_Type.init(
  {
    type_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    type: {type:STRING}
  },
  { sequelize, modelName: 'budget_type' }
)
