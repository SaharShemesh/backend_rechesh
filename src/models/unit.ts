import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Unit extends Model {}

Unit.init(
  {
    unit_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    unit: { type: STRING },
  },
  { sequelize, modelName: "unit" }
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
    }
  )
    //})
    .then(() => console.log("units where created"));
});
