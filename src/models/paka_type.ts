import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Paka_Type extends Model {}

Paka_Type.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "paka_type" },
);
