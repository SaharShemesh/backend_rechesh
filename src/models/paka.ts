import { Model, INTEGER, STRING, DATEONLY } from "sequelize";
import sequelize from "./init";

export class Paka extends Model {}

Paka.init(
  {
    paka: { type: INTEGER, primaryKey: true, autoIncrement: true },
    paka_team: { type: STRING },
    priority: { type: INTEGER },
    deadline: { type: DATEONLY },
    paka_type: { type: INTEGER },
  },
  { sequelize, modelName: "paka" },
);

//seeders
// Paka.sync({ force: true }).then(() => {
//   Paka.bulkCreate(
//     [
//       {
//         paka_team: "שפיץ",
//         priority: 1,
//         deadline: "23.07.21",
//         paka_type: 1,
//       },
//       {
//         paka_team: "הסוג שהוא לא שפיץ שאני לא זוכר את השם שלו",
//         priority: 2,
//         deadline: "26.07.21",
//         paka_type: 2,
//       },
//       {
//         paka_team: "שפיץ",
//         priority: 3,
//         deadline: "28.07.21",
//         paka_type: 3,
//       },
//     ],
//     {
//       fields: ["paka_team", "priority", "deadline", "paka_type"],
//       ignoreDuplicates: true,
//       updateOnDuplicate: ["paka_team", "priority", "deadline", "paka_type"],
//     },
//   )
//     //})
//     .then(() => console.log("Pakas were created"));
// });
