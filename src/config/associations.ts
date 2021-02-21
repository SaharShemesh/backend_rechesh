import * as models from "../models/index";

export default function load_associations(){
  //// MN_Order & Order  
  models.Order.belongsTo(models.MN_Order, {
        foreignKey:'mn_order',
        as:"mnOrder"
      });
  models.MN_Order.hasMany(models.Order);

  ////Order & Bid
  models.Bid.belongsTo(models.Order, {
    foreignKey:'order',
    as:"Order"
  });
models.MN_Order.hasMany(models.Order);
    


  //// Bid & Sell_Item

  models.Bid.belongsToMany(models.Sell_Item, {through:models.Bid_Item, foreignKey:"bid_id"})
  models.Sell_Item.belongsToMany(models.Bid, {through:models.Bid_Item,foreignKey:"item_id"})
}