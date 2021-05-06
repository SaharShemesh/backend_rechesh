import { Model, INTEGER, STRING } from "sequelize";
import { Bid } from "./bid";
import sequelize from "./init";

export class Budget_Type extends Model {}

Budget_Type.init(
  {
    type_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "budget_type" },
);

// //seeders
// Budget_Type.sync({ force: true }).then(() => {
//   Budget_Type.bulkCreate(
//     [
//       {
//         type: "סוג אחד",
//       },
//       {
//         type: "סוג שני",
//       },
//       {
//         type: "עוד איזה סוג",
//       },
//       {
//         type: "סוג יפה כזה",
//       },
//     ],
//     {
//       fields: ["type"],
//       ignoreDuplicates: true,
//       updateOnDuplicate: ["type"],
//     }
//   )
//     //})
//     .then(() => console.log("budget_types were created"));
// });
