import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Soldier extends Model {}

Soldier.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: STRING },
    last_name: { type: STRING },
    id_num: { type: STRING },
  },
  { sequelize, modelName: "soldier" }
);

//seeders
Soldier.sync({ force: true }).then(() => {
  Soldier.bulkCreate(
    [
      {
        first_name: "סהר",
        last_name: "שמש",
        id_num: "1",
      },
      {
        first_name: "אור",
        last_name: "בורנשטין",
        id_num: "2",
      },
      {
        first_name: "מיכל",
        last_name: "אטיאס",
        id_num: "3",
      },
      {
        first_name: "אורי",
        last_name: "אשל",
        id_num: "4",
      },
    ],
    {
      fields: ["first_name", "last_name", "id_num"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["first_name", "last_name", "id_num"],
    }
  )
    //})
    .then(() => console.log("Soldiers were created"));
});
