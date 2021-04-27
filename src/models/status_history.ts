import { Model, INTEGER, BOOLEAN, STRING, DATEONLY } from "sequelize";
import sequelize from "./init";

export class Status_History extends Model {}

Status_History.init(
  {
    history_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    comments: { type: STRING },
    status: { type: INTEGER },
    order: { type: INTEGER },
    part: { type: INTEGER },
    field_index: { type: INTEGER },
    new_value: { type: STRING },
    old_value: { type: DATEONLY },
  },
  { sequelize, modelName: "status_history" }
);

//seeders
Status_History.sync({ force: true }).then(() => {
  Status_History.bulkCreate(
    [
      {
        comments: "הערה ראשונה",
        status: "1",
        order: "1",
        part: "1",
        field_index: "1",
        new_value: "זה אמור להיות סטרינג?",
        old_value: "23.06.2021",
      },
      {
        comments: "הערה שנייה",
        status: "3",
        order: "4",
        part: "6",
        field_index: "2",
        new_value: "אתה בטוח שזה סטרינג?",
        old_value: "25.02.2023",
      },
      {
        comments: "הערה שלישית",
        status: "7",
        order: "8",
        part: "2",
        field_index: "5",
        new_value: "אני לא חושב שזה צריך להיות סטרינג שומע",
        old_value: "14.01.2027",
      },
      {
        comments: "הערה רביעית",
        status: "10",
        order: "734",
        part: "12",
        field_index: "666",
        new_value: "אין לי כוח לחשוב על עוד",
        old_value: "26.08.2030",
      },
    ],
    {
      fields: [
        "comments",
        "status",
        "order",
        "part",
        "field_index",
        "new_value",
        "old_value",
      ],
      ignoreDuplicates: true,
      updateOnDuplicate: [
        "comments",
        "status",
        "order",
        "part",
        "field_index",
        "new_value",
        "old_value",
      ],
    }
  )
    //})
    .then(() => console.log("Statuses histories were created"));
});
