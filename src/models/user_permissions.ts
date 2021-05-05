import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class User_Permissions extends Model {}

User_Permissions.init(
  {
    permission_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    permission: { type: STRING },
  },
  { sequelize, modelName: "User_permissions" },
);

//seeders
User_Permissions.sync({ force: true }).then(() => {
  User_Permissions.bulkCreate(
    [
      {
        permission: "מנהל על",
      },
      {
        permission: "מנהל",
      },
      {
        permission: "משתמש",
      },
    ],
    {
      fields: ["permission"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["permission"],
    },
  )
    //})
    .then(() => console.log("Users permissions were created"));
});
