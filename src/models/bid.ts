import { Model, INTEGER } from "sequelize";
import { Bid_Item } from "./bid_item";
import sequelize from "./init";
import { Order } from "./order";
import { Sell_Item } from "./sell_item";

export class Bid extends Model {}

Bid.init(
  {
    bid_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //order: {type:INTEGER},
    //Provider: {type:INTEGER},
  },
  { sequelize, modelName: "bid" },
);
