import { Model, INTEGER, BOOLEAN, STRING, DATEONLY, NOW } from "sequelize";
import sequelize from "./init";

export class Status_History extends Model {}

Status_History.init(
  {
    history_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    comments: { type: STRING },
    status: { type: INTEGER },
    order: { type: INTEGER },
    part: { type: INTEGER },
    field_index: { type: INTEGER },
    new_value: { type: STRING },
    date: { type: DATEONLY, defaultValue: NOW },
  },
  { sequelize, modelName: "status_history" },
);
