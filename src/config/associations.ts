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
  models.MN_Order.belongsTo(models.User, {
    foreignKey:"customer_id"
  });
  models.User.hasMany(models.MN_Order);

  //assigment & Order
  models.Order.belongsTo(models.Assignment);
  models.Assignment.hasMany(models.Order);

  //base_hierarchy & User
  models.Base_Hierarchy.belongsTo(models.User);
  models.User.hasOne(models.Base_Hierarchy);

  //Budget_Type & Order
  models.Order.belongsTo(models.Budget_Type);
  models.Budget_Type.hasMany(models.Order);

  //creator & Sell_Item
  models.Sell_Item.belongsTo(models.Creator, {
    foreignKey:"creator",
    as:"Creator"
  });
  models.Creator.hasMany(models.Sell_Item);

  //File & Bid
  models.Bid.belongsTo(models.File);
  models.File.hasMany(models.Bid);

  //Order_Type & Order
  models.Order.belongsTo(models.Order_Type, {
    foreignKey:"order_type",
    as:"Order_Type"
  });
  models.Order_Type.hasMany(models.Order);

  //Paka_Type & Order
  models.Order.belongsTo(models.Paka_Type);
  models.Paka_Type.hasMany(models.Order);

  //Paka & Order
  models.Order.belongsTo(models.Paka, {
    foreignKey:"paka",
    as:"Paka"
  });
  models.Paka.hasMany(models.Order);

  //Priority & Order
  models.Order.belongsTo(models.Priority);
  models.Priority.hasMany(models.Order);

  //Priority_Type & Order
  models.Order.belongsTo(models.Priority_Type);
  models.Priority_Type.hasMany(models.Order);

  //Procument_Type & Order
  models.Order.belongsTo(models.Procument_Type, {
    foreignKey:"procument_type",
    as:"Procument_Type"
  });
  models.Procument_Type.hasMany(models.Order);

  //Provider & Sell_Item
  models.Sell_Item.belongsTo(models.Provider, {
    foreignKey:"provider",
    as:"Provider"
  });
  models.Provider.hasMany(models.Sell_Item);

  //Pulling_Bag & Order
  models.Order.belongsTo(models.Pulling_Bag, {
    foreignKey:"pulling_bag",
    as:"Pulling_Bag"
  });
  models.Pulling_Bag.hasMany(models.Order);

  //Soldier & User
  models.User.belongsTo(models.Soldier);
  models.Soldier.hasOne(models.User);

  //Status_History & Order
  models.Status_History.belongsTo(models.Order);
  models.Order.hasMany(models.Status_History);

  //Status & Order
  models.Order.belongsTo(models.Status, {
    foreignKey:"status",
    as:"Status"
  });
  models.Status.hasMany(models.Order);

  //Unit & Sell_Item
  models.Sell_Item.belongsTo(models.Unit, {
    foreignKey:"unit",
    as:"Unit"
  });
  models.Unit.hasMany(models.Sell_Item);

  //User_Premissions & User
  models.User.belongsTo(models.User_Permissions);
  models.User_Permissions.hasMany(models.User);

  //User_Roles & User
  models.User.belongsTo(models.User_Roles);
  models.User_Roles.hasMany(models.User);


}

