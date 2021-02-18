import { Model,INTEGER } from 'sequelize'
import sequelize from './init';
import { Order } from './order';
import { User } from './user';

export class MN_Order extends Model {

}

MN_Order.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    customer_id: {type:INTEGER}
  },
  { sequelize, modelName: 'mn_order' }
)

MN_Order.hasMany(Order);
MN_Order.hasOne(User);
