import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Status extends Model {
  static id: number;
}

Status.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: STRING },
  },
  { sequelize, modelName: "status" },
);
//seeders
Status.sync({ force: true }).then(() => {
  Status.bulkCreate(
    [
      {
        status: "ממתין לאישור מחלקת רכש",
      },
      {
        status: "ממתין לשליחת בקשה להצעה",
      },
      {
        status: "נשלח לספקים",
      },
      {
        status: "סבב אישורים",
      },
      {
        status: "סבב אישורים הסתיים",
      },
      {
        status: "נפתחה דרישה במערכת מידע",
      },
      {
        status: "נפתחה הזמנה במערכת מידע ממתין לאישור הספק להזמנה",
      },
      {
        status: "ממתין להגעת הפריט לבסיס או לאיסוף הפריט מהחנות",
      },
      {
        status: "ממתין לאיסוף המזמין מהמחלקה",
      },
      {
        status: "טיפול חריגים",
      },
      {
        status: "הזמנה טופלה",
      },
      {
        status: "בעיית תשלום לספק",
      },
    ],
    {
      fields: ["status"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["status"],
    },
  )
    //})
    .then(() => console.log("units where created"));
});
