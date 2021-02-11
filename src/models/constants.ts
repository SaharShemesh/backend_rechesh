import { Model,INTEGER, STRING } from 'sequelize'
import sequelize from './init';

export class Constants extends Model {

}

Constants.init(
  {
    cons_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    type: {type:STRING},
    condition: {type:STRING},
    price_value: {type:STRING}
  },
  { sequelize, modelName: 'constants' }
)
