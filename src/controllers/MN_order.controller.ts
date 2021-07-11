import { NextFunction, Request, Response } from "express";
import * as order_helper from "../helpers/MN_Order.helper";

export let get_all = (req: Request, res: Response) => {
  order_helper
    .findAll()
    .then((main_orders) => res.status(200).json(main_orders))
    .catch((error) => res.status(500).json({ error }));
};
export let get_by_customer = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  order_helper
    .get_order_by_user(parseInt(req.params.soldier_id) || 0)
    .then((main_orders) => res.status(200).json(main_orders))
    .catch((error) => next(error));
};

export let post_order = async (req: Request, res: Response) => {
  try {
    let order_id = await order_helper.post_order(req.body);
    let order_created = await order_helper.find_one(order_id);
    res.status(201).json(order_created);
  } catch (error) {
    res.status(500).json({ error });
  }
  console.log(req.body);
};

export let get_order = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let order_id = parseInt(req.params.id);
  let order = await order_helper.find_one(order_id);
  if (!order) res.status(404).json({ message: "order was not found" });
  else res.status(200).json(order);
};

export let delete_order = (req: Request, res: Response) => {
  let order_id = parseInt(req.params.id);
  order_helper
    .delete_order(order_id)
    .then(() => res.status(200).json({ message: "delete main order" }))
    .catch((error) => res.status(400).json({ error }));
};
