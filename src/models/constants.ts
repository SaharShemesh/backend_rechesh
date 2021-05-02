import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Constants extends Model {}

Constants.init(
  {
    cons_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
    condition: { type: STRING },
    price_value: { type: STRING },
  },
  { sequelize, modelName: "constants" },
);

//seeders
Constants.sync({ force: true }).then(() => {
  Constants.bulkCreate(
    [
      {
        type: "קבוע 1",
        condition: "בדיקה של קבוע אחד",
        price_value: "מלא כסף",
      },
      {
        type: "קבוע 2",
        condition: "בדיקה של קבוע שני",
        price_value: "מלא כסף שוב",
      },
      {
        type: "קבוע 3",
        condition: "בדיקה של קבוע שלישי",
        price_value: "הפעם לא כזה מלא כסף",
      },
      {
        type: "קבוע 4",
        condition: "בדיקה של קבוע רביעי",
        price_value: "מלא מלא כסף",
      },
    ],
    {
      fields: ["type", "condition", "price_value"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["type", "condition", "price_value"],
    },
  )
    //})
    .then(() => console.log("constants were created"));
});
