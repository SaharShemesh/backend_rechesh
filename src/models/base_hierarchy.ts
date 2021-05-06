import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Base_Hierarchy extends Model {}
Base_Hierarchy.init(
  {
    location_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    //bim_id: {type:STRING},
    department_name: { type: STRING },
  },
  { sequelize, modelName: "base_hierarchy" },
);
