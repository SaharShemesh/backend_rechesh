import * as models from "../models/index";

export default function load_associations(){
    models.Order.belongsTo(models.MN_Order, {
        foreignKey:'mn_order',
        as:"mnOrder"
      });

    models.MN_Order.hasMany(models.Order);


    //// Many to Many

    models.Bid.belongsToMany(models.Sell_Item, {through:models.Bid_Item, foreignKey:"bid_id"})
    models.Sell_Item.belongsToMany(models.Bid, {through:models.Bid_Item,foreignKey:"item_id"})
}