import { Model,INTEGER,STRING } from 'sequelize'
import sequelize from './init';

export class File extends Model {

}

File.init(
  {
    id: {type:INTEGER,primaryKey:true,autoIncrement:true},
    name: {type:STRING},
    main_request: {type:INTEGER},
    secondary_request: {type:INTEGER},
    bd_id: {type:INTEGER}
  },
  { sequelize, modelName: 'file' }
)
