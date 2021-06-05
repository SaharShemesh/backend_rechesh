import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Provider extends Model {}

Provider.init(
  {
    provider_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    provider_name: { type: STRING },
  },
  { sequelize, modelName: "provider" },
);
