import { MN_Order, Order } from "../models";
import { Sell_Item } from "../models/sell_item";

export const findAll = (sub_order: number) => {
  return Sell_Item.findAll({
    where: {
      sub_order,
    },
    include: [{ all: true }],
  });
};

export const validate_sellItem = (
  mainOrder_id: number,
  sellItem_id: number
) => {
  return Sell_Item.findOne({
    where: {
      item_id: sellItem_id,
    },
    attributes: ["sub_order"],
  })
    .then((sell_Item: Sell_Item) => {
      if (!sell_Item) throw false;

      return Order.findOne({
        where: {
          //@ts-ignore
          id: sell_Item.sub_order,
        },
      });
    })
    .then((Order: Order) => {
      return MN_Order.findOne({
        where: {
          //@ts-ignore
          id: Order.mn_order,
        },
        attributes: ["id"],
      });
    })
    .then((main_order: any) => {
      return main_order.id == mainOrder_id;
    })
    .catch((error) => error);
};

export const delete_sellItem = (id: number) => {
  return Sell_Item.destroy({
    where: {
      id,
    },
  });
};
