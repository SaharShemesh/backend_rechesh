import { NextFunction, Request, Response } from "express";
import * as order_helper from "../helpers/Order.helper";
import * as sell_Item_helper from "../helpers/sell_item.helper";
import { MN_Order, Order, Sell_Item } from "../models";
export let create_order = (req: Request, res: Response, next: NextFunction) => {
  let sell_items: any[] = req.body.sell_items;
  let sub_order: number, new_order: number;
  let req_id = parseInt(req.params.order_id);
  console.log(req.params);
  return Promise.all(
    sell_items.map((sellitem_id: number) =>
      sell_Item_helper.validate_sellItem(req_id, sellitem_id),
    ),
  )
    .then((validated) => {
      if (validated.some((result) => !result))
        throw {
          status: 400,
          er: "not all the sell_items seet under the same request",
        };
      return Promise.all(
        sell_items.map((item_id) =>
          Sell_Item.findOne({
            where: {
              item_id,
            },
            attributes: ["sub_order"],
          }),
        ),
      );
    })
    .then((sub_orders: any) => {
      sub_orders = sub_orders.map(
        (sell_item: { sub_order: any }) => sell_item.sub_order,
      );

      sub_order = parseInt(sub_orders[0]);
      //@ts-ignore
      return sub_orders.every((sub_order) => sub_order == sub_orders[0]);
    })
    .then((all_same) => {
      if (!all_same)
        throw {
          status: 400,
          er: "not all sell_items belong to the same sub order",
        };
      return Order.findOne({
        where: {
          id: sub_order,
        },
        raw: true,
      });
    })
    .then((order: any) => {
      delete order.id;
      console.log(order);
      return MN_Order.findOne({
        where: {
          id: req_id,
        },
      }).then((main_ordr) => {
        //@ts-ignore
        return main_ordr.createOrder(order);
      });
    })
    .then((new_ordr) => {
      //@ts-ignore
      new_order = new_ordr;
      return new_ordr.setSell_items(sell_items);
    })
    .then(() => res.status(201).json({ message: "created", new_order }))
    .catch((error) => res.status(error.status).json({ error: error.er }));
};

let update_order = (req: Request, res: Response, n: NextFunction) => {};
