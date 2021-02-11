import { Model,INTEGER,STRING,DATEONLY } from 'sequelize'
import sequelize from './init';

export class Paka extends Model {

}

Paka.init(
  {
    paka: {type:INTEGER,primaryKey:true,autoIncrement:true},
    paka_team: {type:STRING},
    priority: {type:INTEGER},
    deadline: {type:DATEONLY},
    paka_type: {type:INTEGER},
  },
  { sequelize, modelName: 'paka' }
)
