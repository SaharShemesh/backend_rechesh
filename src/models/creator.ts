import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Creator extends Model {}

Creator.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    creator_name: { type: STRING },
    creator_num: { type: STRING },
  },
  { sequelize, modelName: "creator" }
);

//seeders
Creator.sync({ force: true }).then(() => {
  Creator.bulkCreate(
    [
      {
        creator_name: "אלכס",
        creator_num: "1",
      },
      {
        creator_name: "דני",
        creator_num: "2",
      },
      {
        creator_name: "דני AKA דניאל כץ",
        creator_num: "3",
      },
      {
        creator_name: "עוד מישהו",
        creator_num: "4",
      },
    ],
    {
      fields: ["creator_name", "creator_num"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["creator_name", "creator_num"],
    }
  )
    //})
    .then(() => console.log("creators were created"));
});
