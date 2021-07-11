import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Iaf_Num extends Model {}

Iaf_Num.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    iaf_num: { type: STRING },
    desc: { type: STRING },
  },
  { sequelize, modelName: "iaf_num" },
);
