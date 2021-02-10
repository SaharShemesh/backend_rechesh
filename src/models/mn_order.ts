import { Model,INTEGER } from 'sequelize'
import sequelize from './init';

export class MN_Order extends Model {

}

export class AppUserModel {
  id: string
  customer_id:number
}

MN_Order.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    customer_id: {type:INTEGER}
  },
  { sequelize, modelName: 'MN_Order' }
)
