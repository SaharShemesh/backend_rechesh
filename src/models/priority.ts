import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Priority extends Model {}

Priority.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    priority_name: { type: STRING },
  },
  { sequelize, modelName: "priority" }
);

//seeders
Priority.sync({ force: true }).then(() => {
  Priority.bulkCreate(
    [
      {
        priority_name: "שם חשוב",
      },
      {
        priority_name: "שם חשוב אחר",
      },
      {
        priority_name: "עוד איזה שם חשוב",
      },
      {
        priority_name: "שם חשוב יפה כזה",
      },
    ],
    {
      fields: ["priority_name"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["priority_name"],
    }
  )
    //})
    .then(() => console.log("Priorities were created"));
});
