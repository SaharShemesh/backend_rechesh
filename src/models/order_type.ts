import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class Order_Type extends Model {

}

Order_Type.init(
  {
    type_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    type: {type:STRING},
  },
  { sequelize, modelName: 'order_type' }
)
