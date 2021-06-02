import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Provider extends Model {}

Provider.init(
  {
    provider_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    provider_name: { type: STRING },
  },
  { sequelize, modelName: "provider" }
);

//seeders
Provider.sync({ force: true }).then(() => {
  Provider.bulkCreate(
    [
      {
        provider_name: "אלכס",
      },
      {
        provider_name: "דוד",
      },
      {
        provider_name: "מיכל",
      },
      {
        provider_name: "פז",
      },
    ],
    {
      fields: ["provider_name"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["provider_name"],
    }
  )
    //})
    .then(() => console.log("Providers were created"));
});
