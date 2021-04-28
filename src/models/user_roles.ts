import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class User_Roles extends Model {}

User_Roles.init(
  {
    user_rank: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role: { type: STRING },
  },
  { sequelize, modelName: "User_roles" }
);

//seeders
User_Roles.sync({ force: true }).then(() => {
  User_Roles.bulkCreate(
    [
      {
        role: "חובש קרבי",
      },
      {
        role: "מתכנת",
      },
      {
        role: "עצלן",
      },
      {
        role: "מפקד עולם",
      },
    ],
    {
      fields: ["role"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["role"],
    }
  )
    //})
    .then(() => console.log("Users roles were created"));
});
