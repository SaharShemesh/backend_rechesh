import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Assignment extends Model {}

Assignment.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    assignment_number: { type: STRING },
  },
  { sequelize, modelName: "assignment" },
);

//seeders
Assignment.sync({ force: true }).then(() => {
  Assignment.bulkCreate(
    [
      {
        assignment_number: "9085783426",
      },
      {
        assignment_number: "4892375845",
      },
      {
        assignment_number: "9587258014",
      },
      {
        assignment_number: "4328794201",
      },
    ],
    {
      fields: ["assignment_number"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["assignment_number"],
    },
  )
    //})
    .then(() => console.log("assignments were created"));
});
