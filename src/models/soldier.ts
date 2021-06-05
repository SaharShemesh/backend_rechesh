import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Soldier extends Model {}

Soldier.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: STRING },
    last_name: { type: STRING },
    id_num: { type: STRING },
  },
  { sequelize, modelName: "soldier" },
);
