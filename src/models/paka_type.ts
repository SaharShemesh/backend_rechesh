import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class Paka_type extends Model {

}

Paka_type.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    type: {type:STRING}
  },
  { sequelize, modelName: 'paka_type' }
)
