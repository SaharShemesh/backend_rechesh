import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Priority_Type extends Model {}

Priority_Type.init(
  {
    type_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "priority_type" }
);

//seeders
Priority_Type.sync({ force: true }).then(() => {
  Priority_Type.bulkCreate(
    [
      {
        type: "סוג אחד",
      },
      {
        type: "סוג שני",
      },
      {
        type: "עוד איזה סוג",
      },
      {
        type: "סוג יפה כזה",
      },
    ],
    {
      fields: ["type"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["type"],
    }
  )
    //})
    .then(() => console.log("Priority types were created"));
});
