import { NextFunction, Request, Response } from "express";
import * as bid_helper from "../helpers/Bid.helpers";
import * as order_helper from "../helpers/Order.helper";
import { Bid, Order } from "../models";
import { Status } from "../models/status";
import { User } from "../models/user";

export let get_all = (req: Request, res: Response) => {
  bid_helper
    .findAll()
    .then((bid) => res.status(200).json(bid))
    .catch((error) => res.status(400).json({ error }));
};

export let post_bid = async (req: Request, res: Response) => {
  try {
    let bid = await bid_helper.post_bid(req.body);
    res.status(201).json({ message: "created bid", bid });
  } catch (e) {
    res.status(400).json({ e });
  }
};

export let get_bid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let bid_id = parseInt(req.params.id);
  let bid = await bid_helper.find_one(bid_id);
  if (!bid) res.status(404).json({ message: "bid was not found" });
  else res.status(200).json(bid);
};

// if ((User.user_rank <= 1 ) &&  (Status.id <= 3))
export let delete_bid = async (req: Request, res: Response) => {
  try {
    let bid_id_deleted = parseInt(req.params.id);
    let bid_status = await order_helper.get_status(bid_id_deleted);

    if (parseInt(bid_status) <= 3)
      bid_helper
        .delete_bid(bid_id_deleted)
        .then((bid) => res.status(200).json({ message: "bid was deleted" }))
        .catch((error) =>
          res.status(400).json({ message: "bid cannot be deleted" }),
        );
    else res.status(404).json();
  } catch (e) {
    res.status(500).json({ e });
  }
};

export let post_bids = async (
  req: Request,
  res: Response,
  nx: NextFunction,
) => {
  let bids = req.body;
  let id = parseInt(req.params.sub_id);
  try {
    let order = await Order.findOne({
      where: {
        id,
      },
    });
    if (!order) throw "order was not found";
    for (const bid of bids) {
      console.log("bid:", bid);
      //@ts-ignore
      let created_bid = await order.createBid({ Provider: bid.Provider });
      for (const item of bid.items) {
        item.recive_time = new Date(item.recive_time);
        let sellitem = await created_bid.addSell_item(item.id, {
          through: item,
        });
        console.log("my item");
      }
    }
    res.status(201).end();
  } catch (er) {
    nx(er);
  }
};
