import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Provider extends Model {}

Provider.init(
  {
    provider_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    provider_name: { type: STRING },
    provider_num: { type: INTEGER },
    profession: { type: STRING },
    phones: { type: STRING },
    fax: { type: STRING },
    contact_name: { type: STRING },
    adress: { type: STRING },
    mail: { type: STRING },
    site_adress: { type: STRING },
  },
  { sequelize, modelName: "provider" },
);
