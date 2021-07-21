import { Order } from "../models/order";
import { MN_Order } from "../models/mn_order";
import { response } from "express";
import { fetching_format } from "../config/formats";

export const findAll = () => {
  return MN_Order.findAll(fetching_format);
};
export const get_order_by_user = (id: number) => {
  let format = Object.assign(fetching_format, {});
  //@ts-ignore
  format.include[0].where = {
    id,
  };
  return MN_Order.findAll(fetching_format);
};
export const post_order = (details: any) => {
  let order_id = 0;
  return MN_Order.create(details)
    .then(async (main_order: MN_Order) => {
      order_id = main_order.id;
      //@ts-ignore
      await main_order.setCustomer(1); // for testing
      //@ts-ignore
      return main_order.createOrder(details.Order);
    })
    .then((order) => {
      //@ts-ignore
      return Promise.all([
        ...details.Order.Sell_items.map((sell: any) => {
          //@ts-ignore
          return order.createSell_item(sell);
        }),
        order.setStatus(1),
      ]);
    })
    .then(() => {
      return order_id;
    });
};

export const find_one = (id: number) => {
  let format = { ...fetching_format };
  //@ts-ignore
  format.where = {
    id,
  };
  console.log("new:", format);
  console.log("old:", fetching_format);
  return MN_Order.findOne(format);
};

export const delete_order = (id: number) => {
  return MN_Order.destroy({
    where: {
      id,
    },
  });
};
