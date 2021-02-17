import { Model,INTEGER,STRING, } from 'sequelize'
import sequelize from './init';

export class Procument_Type extends Model {

}

Procument_Type.init(
  {
    type_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    type: {type:STRING},
  },
  { sequelize, modelName: 'procument_type' }
)
