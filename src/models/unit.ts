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
//seeders
Unit.sync({ force: true }).then(() => {
  //destroy previus values
  //Unit.destroy({ where: {} })
  //.then(() => {
  Unit.bulkCreate(
    [
      {
        unit: "מופת",
      },
      {
        unit: "מנהלה",
      },
      {
        unit: "אינטגרציה",
      },
      {
        unit: "תוהן",
      },
      {
        unit: "יחידה 502",
      },
    ],
    {
      fields: ["unit"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["unit"],
    },
  )
    //})
    .then(() => console.log("units where created"));
});
