import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Status extends Model {
  static id: number;
}

Status.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: STRING },
  },
  { sequelize, modelName: "status" }
);

//seeders
Status.sync({ force: true }).then(() => {
  Status.bulkCreate(
    [
      {
        status: "מעולה",
      },
      {
        status: "סבבה",
      },
      {
        status: "אוקיי",
      },
      {
        status: "גרוע",
      },
    ],
    {
      fields: ["status"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["status"],
    }
  )
    //})
    .then(() => console.log("Statuses were created"));
});
