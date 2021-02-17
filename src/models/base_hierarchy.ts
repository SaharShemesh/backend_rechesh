import { Model,INTEGER, STRING } from 'sequelize'
import sequelize from './init';

export class Base_Hierarchy extends Model {

}

Base_Hierarchy.init(
  {
    bim_id: {type:INTEGER},
    department_id: {type:INTEGER},
    bim_name: {type:STRING},
    department_name: {type:STRING}
  },
  { sequelize, modelName: 'base_hierarchy' }
)
