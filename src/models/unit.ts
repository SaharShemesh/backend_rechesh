import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Unit extends Model {}

Unit.init(
  {
    unit_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    unit: { type: STRING },
  },
  //@ts-ignore
  { sequelize, initialAutoIncrement: 1, modelName: "unit" },
);
