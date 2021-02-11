import { Model,INTEGER } from 'sequelize'
import sequelize from './init';

export class Bid extends Model {

}

Bid.init(
  {
    bid_id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    order: {type:INTEGER},
    providor: {type:INTEGER},
    invitor: {type:INTEGER},
    bim_commander: {type:INTEGER},
    professional_empl: {type:INTEGER},
  },
  { sequelize, modelName: 'bid' }
)
