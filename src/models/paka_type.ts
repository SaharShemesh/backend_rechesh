import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Paka_Type extends Model {}

Paka_Type.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "paka_type" }
);

//seeders
Paka_Type.sync({ force: true }).then(() => {
  Paka_Type.bulkCreate(
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
    .then(() => console.log("Paka types were created"));
});
