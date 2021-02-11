import { Model,INTEGER, STRING } from 'sequelize'
import sequelize from './init';

export class Assignment extends Model {

}

Assignment.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    assignment_number: {type:STRING},
  },
  { sequelize, modelName: 'assignment' }
)
