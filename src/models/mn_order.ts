import { Model, INTEGER } from "sequelize";
import sequelize from "./init";

export class MN_Order extends Model {
  id: number;
}

MN_Order.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //customer_id: {type:INTEGER}
  },
  { sequelize, modelName: "main_order" },
);
