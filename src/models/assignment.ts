import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Assignment extends Model {}

Assignment.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    assignment_number: { type: STRING },
  },
  { sequelize, modelName: "assignment" }
);

//seeders
Assignment.sync({ force: true }).then(() => {
  Assignment.bulkCreate(
    [
      {
        assignment_number: "משימה",
      },
      {
        assignment_number: "משימה 2",
      },
      {
        assignment_number: "משימה 3",
      },
      {
        assignment_number: "משימה 4",
      },
    ],
    {
      fields: ["assignment_number"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["assignment_number"],
    }
  )
    //})
    .then(() => console.log("assignments were created"));
});
