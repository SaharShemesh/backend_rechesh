import * as models from "../models/index";
import sequelize from "../models/init";
export default function load_associations() {
  //order

  //bim_commander
  models.Order.belongsTo(models.Soldier, {
    foreignKey: "Bim_commander",
    as: "bim_commander",
  });
  models.Soldier.hasMany(models.Order, {
    foreignKey: "Bim_commander",
  });
  //prefferd proffesional_att
  models.Order.belongsTo(models.Soldier, {
    foreignKey: "Professional_at",
    as: "proffesional_authority",
  });
  models.Soldier.hasMany(models.Order, {
    foreignKey: "Professional_at",
  });
  //proffesional_att1
  models.Order.belongsTo(models.Soldier, {
    foreignKey: "Professional_at1",
    as: "proffesional_authority_1",
  });
  models.Soldier.hasMany(models.Order, {
    foreignKey: "Professional_at1",
  });
  //proffesional_att2
  models.Order.belongsTo(models.Soldier, {
    foreignKey: "Professional_at2",
    as: "proffesional_authority_2",
  });
  models.Soldier.hasMany(models.Order, {
    foreignKey: "Professional_at2",
  });
  //models.Order.belongsTo(models.Soldier);

  //Order & Main Order
  models.Order.belongsTo(models.MN_Order, {
    foreignKey: "mn_order",
    as: "main_order",
  });
  models.MN_Order.hasMany(models.Order, {
    foreignKey: "mn_order",
  });
  //all bids connected to specific order
  models.Order.hasMany(models.Bid, {
    foreignKey: "order_id",
    as: "Bids",
  });
  models.Bid.belongsTo(models.Order, {
    foreignKey: "order_id",
  });
  //   //win_bid
  models.Bid.hasOne(models.Order, {
    foreignKey: "win_bid",
    constraints: false,
  });
  models.Order.belongsTo(models.Bid, {
    foreignKey: "win_bid",
    constraints: false,
    as: "Win_bid",
  });

  //   //Order & Sell Item
  models.Sell_Item.belongsTo(models.Order, {
    foreignKey: "sub_order",
    as: "subOrder",
  });
  models.Order.hasMany(models.Sell_Item, {
    foreignKey: "sub_order",
  });

  //   //assignment & Order
  models.Order.belongsTo(models.Assignment, {
    foreignKey: "assignment_id",
  });
  models.Assignment.hasMany(models.Order, {
    foreignKey: "assignment_id",
  });

  //   //Budget_Type & Order
  models.Order.belongsTo(models.Budget_Type, {
    //גורם מתקצב
    foreignKey: "budget_type",
    as: "Budget_type",
  });
  models.Budget_Type.hasMany(models.Order, {
    foreignKey: "budget_type",
  });

  //   //Priority & Order
  models.Order.belongsTo(models.Priority, {
    foreignKey: "priority",
    as: "Priority",
  });
  models.Priority.hasMany(models.Order, {
    foreignKey: "priority",
  });

  //   //Priority_Type & Order
  models.Order.belongsTo(models.Priority_Type, {
    foreignKey: "Priority_type",
  });
  models.Priority_Type.hasMany(models.Order, {
    foreignKey: "Priority_type",
  });

  //   //Procument_Type & Order
  models.Order.belongsTo(models.Procument_Type, {
    foreignKey: "procument_type",
    as: "Procument_Type",
  });
  models.Procument_Type.hasMany(models.Order, {
    foreignKey: "procument_type",
  });
  //   //Order_Type & Order
  models.Order.belongsTo(models.Order_Type, {
    foreignKey: "order_type",
    as: "Order_type",
  });
  models.Order_Type.hasMany(models.Order, {
    foreignKey: "order_type",
  });

  //Paka_Type & Order
  models.Paka.belongsTo(models.Paka_Type, {
    foreignKey: "paka_type",
    as: "Paka_type",
  });
  models.Paka_Type.hasMany(models.Paka, {
    foreignKey: "paka_type",
    as: "paka",
  });

  //   //Paka & Order
  models.Order.belongsTo(models.Paka, {
    foreignKey: "paka",
    as: "Paka",
  });
  models.Paka.hasMany(models.Order, {
    foreignKey: "paka",
  });
  //paka and priority
  models.Paka.belongsTo(models.Priority, {
    foreignKey: "priority",
    as: "Priority",
  });
  //  //Pulling_Bag & Order
  models.Order.belongsTo(models.Pulling_Bag, {
    foreignKey: "pulling_bag",
    as: "Pulling_bag",
  });
  models.Pulling_Bag.hasMany(models.Order, {
    foreignKey: "pulling_bag",
  });

  //   //Status_History & Order
  models.Status_History.belongsTo(models.Order, {
    foreignKey: "order",
  });
  models.Order.hasMany(models.Status_History, {
    foreignKey: "order",
    as: "History",
  });

  //   //Status & Order
  models.Order.belongsTo(models.Status, {
    foreignKey: "status",
    as: "Status",
    constraints: false,
  });
  models.Status.hasMany(models.Order, {
    foreignKey: "status",
    constraints: false,
  });

  //   //bid and sell_item association
  models.Bid.belongsToMany(models.Sell_Item, {
    through: models.Bid_Item,
    otherKey: "bid_id",
    foreignKey: "item_id",
  });
  models.Sell_Item.belongsToMany(models.Bid, {
    through: models.Bid_Item,
    foreignKey: "bid_id",
    otherKey: "item_id",
  });

  models.Bid.belongsTo(models.Provider, {
    foreignKey: "Provider",
  });
  models.Provider.hasMany(models.Bid, {
    foreignKey: "Provider",
  });
  //main_order
  //User & Main Order
  models.MN_Order.belongsTo(models.Soldier, {
    foreignKey: "customer_id",
    as: "Customer",
  });
  models.Soldier.hasMany(models.MN_Order, {
    foreignKey: "customer_id",
    as: "main_orders",
  });

  //  //user

  //   //base_hierarchy & User
  models.User.belongsTo(models.Base_Hierarchy, {
    foreignKey: "location_id",
    as: "Location",
  });
  models.Base_Hierarchy.hasMany(models.User, {
    foreignKey: "location_id",
  });

  models.Bim.hasMany(models.Base_Hierarchy, {
    foreignKey: "bim_id",
    as: "locations",
  });
  models.Base_Hierarchy.belongsTo(models.Bim, {
    foreignKey: "bim_id",
    as: "bim",
  });

  models.Bim.belongsTo(models.Unit, {
    foreignKey: "unit_id",
  });
  models.Unit.hasMany(models.Bim, {
    foreignKey: "unit_id",
  });
  // //     //User_Premissions & User
  models.User.belongsTo(models.User_Permission, {
    foreignKey: "permission_id",
    as: "Permission",
  });
  models.User_Permission.hasMany(models.User, {
    foreignKey: "permission_id",
  });

  // //     //User_Roles & User
  models.User.belongsTo(models.User_Roles, {
    foreignKey: "role_id",
    as: "Role",
  });
  models.User_Roles.hasMany(models.User, {
    foreignKey: "role_id",
  });

  // //   //Soldier & User
  models.User.belongsTo(models.Soldier, {
    foreignKey: "soldier_id",
    as: "Soldier",
  });
  models.Soldier.hasOne(models.User, {
    foreignKey: "soldier_id",
  });

  // //   //sell_item

  // //     //Provider & Sell_Item

  models.Provider.hasMany(models.Sell_Item, {
    foreignKey: "provider",
  });

  models.Sell_Item.belongsTo(models.Provider, {
    foreignKey: "provider",
    as: "Provider",
  });

  // iaf_num & Sell_Item

  models.Sell_Item.belongsTo(models.Iaf_Num, {
    foreignKey: "Iaf_num",
  });
  models.Iaf_Num.hasMany(models.Sell_Item, {
    foreignKey: "Iaf_num",
  });

  //paka and mascha
  models.Paka.belongsTo(models.Iaf_Num, {
    foreignKey: {
      defaultValue: null,
      name: "iaf_Num",
    },
  });
  models.Iaf_Num.hasMany(models.Paka, {
    foreignKey: {
      defaultValue: null,
      name: "iaf_Num",
    },
  });

  // //   //creator & Sell_Item
  models.Sell_Item.belongsTo(models.Creator, {
    foreignKey: "creator",
    as: "Creator",
  });
  models.Creator.hasMany(models.Sell_Item, {
    foreignKey: "creator",
  });

  // //  //Unit & Sell_Item
  // models.Sell_Item.belongsTo(models.Unit, {
  //   foreignKey: "unit",
  //   as: "Unit",
  // });
  // models.Unit.hasMany(models.Sell_Item, {
  //   foreignKey: "unit",
  // });

  //   //bid

  //   //File & Bid
  models.File.belongsTo(models.Bid);
  models.Bid.hasMany(models.File);

  models.Sell_Item.belongsTo(models.Measurement, {
    foreignKey: "measurement",
    as: "Measurement",
  });
  models.Measurement.hasMany(models.Sell_Item, {
    foreignKey: "measurement",
  });

  // sync db
  sequelize
    .sync({ force: true })
    .then(() => console.log("success"))
    .catch((e) => console.log("faliur", e));
}
