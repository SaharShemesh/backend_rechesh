import * as models from "../models/index";
import sequelize from "../models/init";

export default function load_associations(){

  //order 
  
  //bim_commander
  models.Order.belongsTo(models.User,{
    foreignKey:"Bim_commander",
    as:"bim_commander"
  })
  models.User.hasOne(models.Order,{
    foreignKey:"Bim_commander"
  });
   //proffesional_att1
  models.Soldier.hasOne(models.Order,{
   foreignKey:"Professional_at1",
   as:"proffesional_authority_1"
  })

    //proffesional_att2
    models.Soldier.hasOne(models.Order,{
      foreignKey:"Professional_at2",
      as:"proffesional_authority_2"
     })

     //models.Order.belongsTo(models.Soldier);
  
     //Order & Main Order
  models.Order.belongsTo(models.MN_Order, {
    foreignKey: "mn_order",
    as:"main_order"
  });
  models.MN_Order.hasMany(models.Order,{
    foreignKey: "mn_order",
    // as:{
    //   plural:"Orders",
    //   singular:"Order"
    // }
  });
  
//   //win_bid
   models.Bid.hasOne(models.Order,{
     foreignKey:"win_bid",
   })
   models.Order.belongsTo(models.Bid,{
    foreignKey:"win_bid",
    as:"Win_bid"
   });
//   //Order & Sell Item
  models.Sell_Item.belongsTo(models.Order, {
    foreignKey:"sub_order",
    as:"subOrder",
  });
  models.Order.hasMany(models.Sell_Item,{
    foreignKey:"sub_order",
  });

//   //assigment & Order
  models.Order.belongsTo(models.Assignment,{
    foreignKey:"assignment_id"  
  });
  models.Assignment.hasMany(models.Order,{
    foreignKey:"assignment_id"
  });

//   //Budget_Type & Order
  models.Order.belongsTo(models.Budget_Type,{
    foreignKey:"budget",
  });
  models.Budget_Type.hasMany(models.Order,{
    foreignKey:"budget"
  });

//   //Priority & Order
   models.Order.belongsTo(models.Priority,{
     foreignKey:"priority",
     as:"Priority"
   });
   models.Priority.hasMany(models.Order,{
    foreignKey:"priority"
   });

//   //Priority_Type & Order
   models.Order.belongsTo(models.Priority_Type,{
   foreignKey:"Priority_type"
   });
   models.Priority_Type.hasMany(models.Order,{
   foreignKey:"Priority_type"
   });

//   //Procument_Type & Order
  models.Order.belongsTo(models.Procument_Type, {
    foreignKey:"procument_type",
    as:"Procument_Type"
  });
  models.Procument_Type.hasMany(models.Order,{
    foreignKey:"procument_type",
  });
//   //Order_Type & Order
  models.Order.belongsTo(models.Order_Type, {
    foreignKey:"order_type",
    as:"Order_type"
  });
  models.Order_Type.hasMany(models.Order,{
    foreignKey:"order_type"
  });

//   //Paka_Type & Order
  models.Order.belongsTo(models.Paka_Type,{
    foreignKey:"Paka_type"
  });
  models.Paka_Type.hasMany(models.Order,{
    foreignKey:"Paka_type"
  });

//   //Paka & Order
  models.Order.belongsTo(models.Paka, {
    foreignKey:"paka",
    as:"Paka"
  });
  models.Paka.hasMany(models.Order,{
    foreignKey:"paka"
  });

//  //Pulling_Bag & Order
  models.Order.belongsTo(models.Pulling_Bag, {
    foreignKey:"pulling_bag",
    as:"Pulling_bag"
  });
  models.Pulling_Bag.hasMany(models.Order,{
    foreignKey:"pulling_bag",
  });

//   //Status_History & Order
  models.Status_History.belongsTo(models.Order,{
    foreignKey:"order"
  });
  models.Order.hasMany(models.Status_History,{
    foreignKey:"order",
    as:"History"
  });

//   //Status & Order
  models.Order.belongsTo(models.Status, {
    foreignKey:"status",
    as:"Status"
  });
  models.Status.hasMany(models.Order,{
    foreignKey:"status",
  });


//   //bid and sell_item association
  models.Bid.belongsToMany(models.Sell_Item, {
    through: models.Bid_Item,
    otherKey:"bid_id",
    foreignKey: "item_id",
  });
  models.Sell_Item.belongsToMany(models.Bid, {
    through: models.Bid_Item,
    foreignKey: "bid_id",
    otherKey:"item_id"
  });

  //main_order
  //User & Main Order
  models.MN_Order.belongsTo(models.User, {
    foreignKey:"customer_id",
    as:"Customer"
  });
  models.User.hasMany(models.MN_Order, {
    foreignKey:"customer_id",
    as:"Customer"
  });


  //Sell_Item
  //Sell_Item & Provider
  models.Sell_Item.belongsTo(models.Provider, {
    foreignKey:"provider",
    as:"Provider"
  });
  models.Provider.hasMany(models.Sell_Item,{
    foreignKey:"provider"
  });

  //Sell_Item & Creator
  models.Sell_Item.belongsTo(models.Creator, {
    foreignKey:"creator",
    as:"Creator"
  });
  models.Creator.hasMany(models.Sell_Item,{
    foreignKey:"creator"
  });

  //Sell_Item & Unit
  models.Sell_Item.belongsTo(models.Unit, {
    foreignKey:"unit",
    as:"Unit"
  });
  models.Unit.hasMany(models.Sell_Item,{
    foreignKey:"unit"
  });

  //Bid
  //Bid & provider
  // models.Bid.belongsTo(models.Provider, {
  //   foreignKey:"provider",
  // });
  // models.Provider.hasMany(models.Bid,{
  //   foreignKey:"provider"
  // }); 

  
//  //user

//   //base_hierarchy & User
//   models.User.belongsTo(models.Base_Hierarchy,{
//     foreignKey:"location_id",
//     as:"Location"
//   });
//   models.Base_Hierarchy.hasMany(models.User);

//     //User_Premissions & User
//     models.User.belongsTo(models.User_Permissions,{
//       foreignKey:"permission_id",
//       as:"Permission"
//     });
//     models.User_Permissions.hasMany(models.User);
  
//     //User_Roles & User
//     models.User.belongsTo(models.User_Roles,{
//       foreignKey:"role_id",
//       as:"Role"
//     });
//     models.User_Roles.hasMany(models.User);

//   //Soldier & User
//   models.User.belongsTo(models.Soldier,{
//     foreignKey:"soldier_id",
//      as:"Soldier"
//   });
//   models.Soldier.hasOne(models.User);

//   //sell_item

//     //Provider & Sell_Item
//   models.Sell_Item.belongsTo(models.Provider, {
//     foreignKey:"provider",
//     as:"Provider"
//   });
//   models.Provider.hasMany(models.Sell_Item);
//   //creator & Sell_Item
//   models.Sell_Item.belongsTo(models.Creator, {
//     foreignKey:"creator",
//     as:"Creator"
//   });
//   models.Creator.hasMany(models.Sell_Item);

//  //Unit & Sell_Item
//  models.Sell_Item.belongsTo(models.Unit, {
//   foreignKey:"unit",
//   as:"Unit"
// });
// models.Unit.hasMany(models.Sell_Item);


//   //bid
  
//   //File & Bid
//   models.Bid.belongsTo(models.File);
//   models.File.hasMany(models.Bid);



  



 
// sync db
sequelize.sync({force:true}).then(() => console.log("success")).catch((e) => console.log("faliur",e));






}

