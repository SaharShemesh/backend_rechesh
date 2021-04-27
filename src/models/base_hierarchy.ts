import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Base_Hierarchy extends Model {}

Base_Hierarchy.init(
  {
    location_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    bim_name: { type: STRING },
    department_name: { type: STRING },
    unit_name: { type: STRING },
  },
  { sequelize, modelName: "base_hierarchy" }
);

//seeders
Base_Hierarchy.sync({ force: true }).then(() => {
  Base_Hierarchy.bulkCreate(
    [
      {
        unit_name: "תוהן",
        bim_name: "מתן",
        department_name: "מערכות מידע",
      },
      {
        unit_name: "תוהן",
        bim_name: "מתן",
        department_name: "PMO",
      },
      {
        unit_name: "מופת",
        bim_name: "לוחמה אלקטרונית",
        department_name: "ספקים",
      },
      {
        unit_name: "מופת",
        bim_name: "נשם",
        department_name: "עוד אלקטרוניקה",
      },
    ],
    {
      fields: ["unit_name", "bim_name", "department_name"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["unit_name", "bim_name", "department_name"],
    }
  )
    //})
    .then(() => console.log("base_hierarchy were created"));
});
