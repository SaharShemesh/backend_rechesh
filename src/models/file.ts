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
  { sequelize, modelName: "file" }
);

//seeders
File.sync({ force: true }).then(() => {
  File.bulkCreate(
    [
      {
        name: "קובץ פדף",
        main_request: "פדף כזה",
        secondary_request: "פדף אחר",
        bd_id: "1",
      },
      {
        name: "קובץ וורד",
        main_request: "וורד כזה",
        secondary_request: "וורד אחר",
        bd_id: "2",
      },
      {
        name: "פוואר פוינט",
        main_request: "פוואר פוינא כזה",
        secondary_request: "פוואר פוינט אחר",
        bd_id: "3",
      },
      {
        name: "אין לי כוח לחשוב על עוד",
        main_request: "עוד כזה",
        secondary_request: "עוד אחר",
        bd_id: "4",
      },
    ],
    {
      fields: ["name", "main_request", "secondary_request", "bd_id"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["name", "main_request", "secondary_request", "bd_id"],
    }
  )
    //})
    .then(() => console.log("Files were created"));
});
