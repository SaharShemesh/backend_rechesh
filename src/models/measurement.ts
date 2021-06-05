import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Measurement extends Model {}

Measurement.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    measurement: { type: STRING },
  },
  { sequelize, modelName: "measurement" },
);
