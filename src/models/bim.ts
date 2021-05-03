import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Bim extends Model {}

Bim.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bim_name: { type: STRING },
    //unit_id:{type:INTEGER}
  },
  { sequelize, modelName: "bim" },
);
