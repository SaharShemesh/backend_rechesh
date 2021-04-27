import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Order_Type extends Model {}

Order_Type.init(
  {
    type_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: STRING },
  },
  { sequelize, modelName: "order_type" }
);

//seeders
Order_Type.sync({ force: true }).then(() => {
  Order_Type.bulkCreate(
    [
      {
        type: "סוג אחד",
      },
      {
        type: "סוג שני",
      },
      {
        type: "עוד איזה סוג",
      },
      {
        type: "סוג יפה כזה",
      },
    ],
    {
      fields: ["type"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["type"],
    }
  )
    //})
    .then(() => console.log("Order types were created"));
});
