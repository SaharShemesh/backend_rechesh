import { Model,INTEGER,STRING, } from 'sequelize'
import sequelize from './init';

export class Pulling_Bag extends Model {

}

Pulling_Bag.init(
  {
    bag_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    bag_number: {type:INTEGER},
    bag_description: {type:STRING},
    sum_budget: {type:INTEGER}
  },
  { sequelize, modelName: 'pulling_bag' }
)
