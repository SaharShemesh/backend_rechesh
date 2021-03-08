import * as models from "../models/index";

export default function load_associations(){
  //Order & Main Order
  models.Order.belongsTo(models.MN_Order, {
    foreignKey: "mn_order",
    as: "mnOrder",
  });
  models.MN_Order.hasMany(models.Order);

  //Order & Sell Item
  models.Sell_Item.belongsTo(models.Order, {
    foreignKey:"sub_order",
    as:"subOrder",
  });

  models.Order.hasMany(models.Sell_Item);

  //Many to Many
  models.Bid.belongsToMany(models.Sell_Item, {
    through: models.Bid_Item,
    foreignKey: "bid_id",
  });
  models.Sell_Item.belongsToMany(models.Bid, {
    through: models.Bid_Item,
    foreignKey: "item_id",
  });

  //User & Main Order
  models.MN_Order.belongsTo(models.User);
  models.User.hasOne(models.MN_Order);

  //assigment & Order
  models.Assignment.belongsTo(models.Order);
  models.Order.hasOne(models.Assignment);

  //base_hierarchy & User
  models.Base_Hierarchy.belongsTo(models.User);
  models.User.hasOne(models.Base_Hierarchy);

  //Budget_Type & Order
  models.Budget_Type.belongsTo(models.Order);
  models.Order.hasOne(models.Budget_Type);

  //creator & Sell_Item
  models.Creator.belongsTo(models.Sell_Item);
  models.Sell_Item.hasOne(models.Creator);

  //File & Bid
  models.File.belongsTo(models.Sell_Item);
  models.Sell_Item.hasMany(models.File);

  //Order_Type & Order
  models.Order_Type.belongsTo(models.Order);
  models.Order_Type.hasOne(models.Order);

  //Paka_Type & Order
  models.Paka_type.belongsTo(models.Order);
  models.Order.hasOne(models.Paka_type);

  //Paka & Order
  models.Paka.belongsTo(models.Order);
  models.Order.hasOne(models.Paka);

  //Priority & Order
  models.Priority.belongsTo(models.Order);
  models.Order.hasOne(models.Priority);

  //Priority_Type & Order
  models.Priority_Type.belongsTo(models.Order);
  models.Order.hasOne(models.Priority_Type);

  //Procument_Type & Order
  models.Procument_Type.belongsTo(models.Order);
  models.Order.hasOne(models.Procument_Type);

  //Provider & Sell_Item
  models.Provider.belongsTo(models.Sell_Item);
  models.Sell_Item.hasOne(models.Provider);

  //Pulling_Bag & Order
  models.Pulling_Bag.belongsTo(models.Order);
  models.Order.hasOne(models.Pulling_Bag);

  //Soldier & User
  models.Soldier.belongsTo(models.User);
  models.User.hasOne(models.Soldier);

  //Status_History & Order
  models.Status_History.belongsTo(models.Order);
  models.Order.hasOne(models.Status_History);

  //Status & Order
  models.Status.belongsTo(models.Order);
  models.Order.hasOne(models.Status);

  //Unit & Sell_Item
  models.Unit.belongsTo(models.Sell_Item);
  models.Sell_Item.hasOne(models.Unit);

  //User_Premissions & User
  models.User_Permissions.belongsTo(models.User);
  models.User.hasOne(models.User_Permissions);

  //User_Roles & User
  models.User_Roles.belongsTo(models.User);
  models.User.hasOne(models.User_Roles);


}

