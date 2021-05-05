import { Model, INTEGER, STRING, INET } from "sequelize";
import sequelize from "./init";
import { MN_Order } from "./mn_order";
import { Order } from "./order";
import { Soldier } from "./soldier";

export class User extends Model {}

User.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    phone: { type: STRING },
    //location_id: {type:INTEGER},
    //department: {type:INTEGER},
    //user_typeid: {type:INTEGER},
  },
  { sequelize, modelName: "user" },
);

//seeders
Soldier.sync({ force: true }).then(async () => {
  await Soldier.bulkCreate(
    [
      {
        first_name: "סהר",
        last_name: "שמש",
        id_num: "8745648",
      },
      {
        first_name: "אור",
        last_name: "בורנשטין",
        id_num: "9845728",
      },
      {
        first_name: "מיכל",
        last_name: "אטיאס",
        id_num: "9876152",
      },
      {
        first_name: "אורי",
        last_name: "אשל",
        id_num: "3748597",
      },
    ],
    {
      fields: ["first_name", "last_name", "id_num"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["first_name", "last_name", "id_num"],
    },
  )
    //})
    .then(() => console.log("Soldiers were created"));
});

//seeders
// User.sync({ force: true }).then(() => {
//   return (
//     User.bulkCreate(
//       [
//         {
//           phone: "0574433275",
//           location_id: 2,
//           permission_id: 1,
//           role_id: 1,
//           soldier_id: 1,
//         },
//         {
//           phone: "0527456332",
//           location_id: 2,
//           permission_id: 2,
//           role_id: 2,
//           soldier_id: 2,
//         },
//       ],
//       {
//         fields: ["phone"],
//         ignoreDuplicates: true,
//         updateOnDuplicate: ["phone"],
//       },
//     )
//       //})
//       .then(() => console.log("Users were created"))
//   );
// return User.create({
//   phone: "0574433275",
//   location_id: 2,
//   permission_id: 1,
//   role_id: 1,
//   soldier_id: 1,
// }).then(() => console.log("Users were created"));
//});
