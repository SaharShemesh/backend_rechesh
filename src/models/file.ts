import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class File extends Model {}

File.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING },
    main_request: { type: INTEGER },
    secondary_request: { type: INTEGER },
    bd_id: { type: INTEGER },
  },
  { sequelize, modelName: "file" },
);

//seeders
// File.sync({ force: true }).then(() => {
//   File.bulkCreate(
//     [
//       {
//         name: "קובץ פדף",
//         main_request: 1,
//         secondary_request: 1,
//         bd_id: 1,
//       },
//       {
//         name: "קובץ וורד",
//         main_request: 2,
//         secondary_request: 2,
//         bd_id: 2,
//       },
//       {
//         name: "פוואר פוינט",
//         main_request: 3,
//         secondary_request: 3,
//         bd_id: 3,
//       },
//       {
//         name: "אין לי כוח לחשוב על עוד",
//         main_request: 4,
//         secondary_request: 4,
//         bd_id: 4,
//       },
//     ],
//     {
//       fields: ["name", "main_request", "secondary_request", "bd_id"],
//       ignoreDuplicates: true,
//       updateOnDuplicate: ["name", "main_request", "secondary_request", "bd_id"],
//     },
//   )
//     //})
//     .then(() => console.log("Files were created"));
// });
