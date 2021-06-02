import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Priority_Type extends Model {}

Priority_Type.init(
  {
    type_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "priority_type" },
);
