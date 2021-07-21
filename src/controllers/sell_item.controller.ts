import { NextFunction, Request, response, Response } from "express";
import * as sellitem_helper from "../helpers/sell_item.helper";
import * as order_helper from "../helpers/Order.helper";
import { Order, Sell_Item } from "../models";
import { sell_item_format } from "../config/formats";
import { Op } from "sequelize";

export let get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let sell_items = await Sell_Item.findAll({
    where: {
      sub_order: parseInt(req.params.sub_id),
    },
  });
  if (!sell_items) next({ message: "sell items where not found" });
  else res.status(200).json(sell_items);
  next();
};

// if ((Status.id == 1 ) ||  ((1 < Status.id <= 4) && (User.user_rank <= 1))
export let delete_sellItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let order_id = parseInt(req.params.sub_id);
  let item_id = parseInt(req.params.id);
  Sell_Item.destroy({
    where: {
      item_id,
      sub_order: order_id,
    },
  })
    .then(() => {
      res.status(200).json({ output: "sell item was removed" });
    })
    .catch((e) => next(e));
};

export let put_items = (req: Request, res: Response, nx: NextFunction) => {
  let items = req.body;
  return Promise.all(
    items.map((item: any) =>
      Sell_Item.update(item, {
        where: {
          item_id: item.id,
        },
      }),
    ),
  )
    .then(() =>
      Sell_Item.findAll({
        ...sell_item_format,
        where: {
          sub_order: parseInt(req.params.sub_id),
        },
      }),
    )
    .then((re) => res.json(re))
    .catch((errr) => nx(errr));
};

export let post_items = (req: Request, res: Response, nx: NextFunction) => {
  let items = req.body;
  let id = parseInt(req.params.sub_id);
  return Order.findOne({
    where: {
      id,
    },
  })
    .then((order: any) => {
      return Promise.all(items.map((item: any) => order.createSell_item(item)));
    })
    .then((items) => {
      let item_ids = items.map(({ item_id }) => ({ item_id }));
      return Sell_Item.findAll({
        where: {
          [Op.or]: item_ids,
        },
        ...sell_item_format,
      });
    })
    .then((items) => res.status(200).json(items))
    .catch((errr) => nx(errr));
};
