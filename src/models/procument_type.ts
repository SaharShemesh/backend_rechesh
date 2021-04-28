import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Procument_Type extends Model {}

Procument_Type.init(
  {
    type_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "procument_type" }
);

//seeders
Procument_Type.sync({ force: true }).then(() => {
  Procument_Type.bulkCreate(
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
    .then(() => console.log("Procument types were created"));
});
