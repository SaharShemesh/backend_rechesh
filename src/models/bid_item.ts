import { Model, INTEGER, DATEONLY } from "sequelize";
import sequelize from "./init";

export class Bid_Item extends Model {}

Bid_Item.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bim_commander: { type: INTEGER },
    bid_id: { type: INTEGER },
    item_id: { type: INTEGER },
    quantity: { type: INTEGER },
    price: { type: INTEGER },
    recive_time: { type: DATEONLY },
  },
  { sequelize, modelName: "Bid_item" }
);

//seeders
Bid_Item.sync({ force: true }).then(() => {
  Bid_Item.bulkCreate(
    [
      {
        bim_commander: "גלית",
        bid_id: "1",
        item_id: "1",
        quantity: "1",
        price: "300",
        recive_time: "14",
      },
      {
        bim_commander: "ארתור",
        bid_id: "2",
        item_id: "65",
        quantity: "3",
        price: "9600",
        recive_time: "28",
      },
      {
        bim_commander: "עוד שמות של מפקדי גפים",
        bid_id: "3",
        item_id: "45",
        quantity: "13",
        price: "2",
        recive_time: "2",
      },
    ],
    {
      fields: [
        "bim_commander",
        "bid_id",
        "item_id",
        "quantity",
        "price",
        "recive_time",
      ],
      ignoreDuplicates: true,
      updateOnDuplicate: [
        "bim_commander",
        "bid_id",
        "item_id",
        "quantity",
        "price",
        "recive_time",
      ],
    }
  )
    //})
    .then(() => console.log("bid_items were created"));
});
