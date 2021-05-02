import { MN_Order, Sell_Item } from "../models";
import { Order } from "../models/order";
import * as sell_Item_helper from "../helpers/sell_item.helper";
import * as Status_helper from "../helpers/status.helper";

export const findAll = () => {
  return Order.findAll({ include: [{ all: true }] });
};

// export const post_order = async (mainOrder_id: number, details: any) => {
//   let sell_items: any[] = details.sell_items;
//   let sub_order: number, new_order: number;
//   console.log(details);
//   return Promise.all(
//     sell_items.map((sellitem_id: number) =>
//       sell_Item_helper.validate_sellItem(mainOrder_id, sellitem_id),
//     ),
//   )
//     .then((validated) => {
//       if (validated.some((result) => !result)) throw false;
//       return Promise.all(
//         sell_items.map((item_id) =>
//           Sell_Item.findOne({
//             where: {
//               item_id,
//             },
//             attributes: ["sub_order"],
//           }),
//         ),
//       );
//     })
//     .then((sub_orders: any) => {
//       sub_orders = sub_orders.map(
//         (sell_item: { sub_order: any }) => sell_item.sub_order,
//       );
//       sub_order = parseInt(sub_orders[0]);
//       //@ts-ignore
//       return sub_orders.every((sub_order) => sub_order == sub_orders[0]);
//     })
//     .then((all_same) => {
//       if (!all_same) throw false;
//       return Order.findOne({
//         where: {
//           id: sub_order,
//         },
//       });
//     })
//     .then((order) => {
//       return Order.create(order);
//     })
//     .then((new_order) => {
//       //@ts-ignore
//       return new_order.setSell_items(sell_items);
//     })
//     .then(async () => {
//       let main_order = await MN_Order.findOne({
//         where: {
//           id: mainOrder_id,
//         },
//       });
//       //@ts-ignore
//       return main_order.setOrders([new_order]);
//     })
//     .then(() => "success")
//     .catch((error) => error);
// };

// export const find_one = (id: number) => {
//   return Order.findOne({
//     where: {
//       id,
//     },
//   });
// };

export const get_status = (id: number) => {
  return Order.findOne({
    raw: true,
    attributes: ["id", "status"],
    where: {
      id,
    },
  }).then((order: any) => {
    if (!order)
      throw {
        status: 500,
        message: "status was not found",
      };
    return order.status;
  });
};
