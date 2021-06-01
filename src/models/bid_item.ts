import { Model, INTEGER, DATEONLY } from "sequelize";
import sequelize from "./init";

export class Bid_Item extends Model {}

Bid_Item.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bid_id: { type: INTEGER },
    item_id: { type: INTEGER },
    quantity: { type: INTEGER },
    price: { type: INTEGER },
    recive_time: { type: DATEONLY },
  },
  { sequelize, modelName: "Bid_item" },
);
