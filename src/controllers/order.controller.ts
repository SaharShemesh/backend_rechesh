import { NextFunction, Request, Response } from "express";
import { order_format } from "../config/formats";
import * as order_helper from "../helpers/Order.helper";
import * as sell_Item_helper from "../helpers/sell_item.helper";
import {
  Assignment,
  Bid,
  Budget_Type,
  MN_Order,
  Order,
  Order_Type,
  Paka,
  Procument_Type,
  Pulling_Bag,
  Sell_Item,
  Soldier,
  User,
} from "../models";
export let return_customer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let id = parseInt(req.params.order_id);
  try {
    await Order.update(
      {
        status: 1,
      },
      {
        where: {
          id,
        },
      },
    );
  } catch {
    next({ message: "problem in returning to customer" });
  }
};
export let create_order = (req: Request, res: Response, next: NextFunction) => {
  let sell_items: any[] = req.body.sell_items;
  let sub_order: number, new_order: number;
  let req_id = parseInt(req.params.req_id);
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
          message: "not all sell_items belong to the same sub order",
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
    .catch((error) => next(error));
};

export let update_order = (req: Request, res: Response, nx: NextFunction) => {
  let req_id = parseInt(req.params.req_id);
  let order_id = parseInt(req.params.order_id);
  let body: any = {};
  let new_status: number;
  return Order.findOne({
    where: {
      id: order_id,
    },
  })
    .then(async (order: any) => {
      if (order.mn_order != req_id)
        throw {
          status: 400,
          message: "order is not sit under the given request",
        };

      if (req.body.order_type) {
        let order_type = await Order_Type.findOne({
          where: {
            type_id: req.body.order_type,
          },
        });
        if (!order_type)
          throw {
            status: 400,
            message: "order type was not found on the system",
          };
      }
      if (req.body.budget_type) {
        let budget_type = await Budget_Type.findOne({
          where: {
            type_id: req.body.budget_type,
          },
        });
        if (!budget_type)
          throw {
            status: 400,
            message: "budget type was not found on the system",
          };
      }
      if (req.body.procument_type) {
        let procument_type = await Procument_Type.findOne({
          where: {
            type_id: req.body.procument_type,
          },
        });
        if (!procument_type)
          throw {
            status: 400,
            message: "procument type was not found on the system",
          };
      }

      if (req.body.pulling_bag) {
        let pulling_bag = await Pulling_Bag.findOne({
          where: {
            bag_id: req.body.pulling_bag,
          },
        });
        if (!pulling_bag)
          throw {
            status: 400,
            message: "pulling bag was not found on the system",
          };
      }

      if (req.body.Professional_at) {
        let Professional_athority = await Soldier.findOne({
          where: {
            id: req.body.Professional_at,
          },
        });
        if (!Professional_athority)
          throw {
            status: 400,
            message: "athority was not found on the system",
          };
      }

      if (req.body.assignment_id) {
        let assignment_nu = await Assignment.findOne({
          where: {
            id: req.body.assignment_id,
          },
        });
        if (!assignment_nu)
          throw {
            status: 400,
            message: "assignment numb was not found on the system",
          };
      }

      if (req.body.paka) {
        let paka_ia = await Paka.findOne({
          where: {
            paka_id: req.body.paka,
          },
        });
        if (!paka_ia)
          throw {
            status: 400,
            message: "paka was not found on the system",
          };
      }

      if (req.body.Bim_commander) {
        let bim_commander = await User.findOne({
          where: {
            id: req.body.Bim_commander,
            //role_id:2 TODO: for bim_commander
          },
        });
        if (!bim_commander)
          throw {
            status: 400,
            message: "bim commander was not found on the system",
          };
      }

      if (req.body.Professional_at1) {
        let p_athr = await Soldier.findOne({
          where: {
            id: req.body.Professional_at1,
          },
        });
        if (!p_athr)
          throw {
            status: 400,
            message: "othority 1 was not found on the system",
          };
      }

      if (req.body.Professional_at2) {
        let prof = await Paka.findOne({
          where: {
            id: req.body.Professional_at2,
          },
        });
        if (!prof)
          throw {
            status: 400,
            message: "athority 2 was not found on the system",
          };
      }
      if (req.body.win_bid) {
        let bid = await Bid.findOne({
          where: {
            bid_id: req.body.win_bid,
            order_id,
          },
        });
        if (!bid)
          throw {
            status: 400,
            message: "bid was not found in this order",
          };
      }
      //TODO: check if user send the request is administrator if(is_admin())
      let status = await order_helper.get_status(order_id);
      let current_status = status;
      if (status == 1) {
        if (!req.body.created_document) status = 2;
        else status = 3;
      }
      if (status == 2) {
        if (req.body.created_document) status = 3;
      }
      if (
        status == 3 &&
        (req.body.win_bid || order.win_bid) &&
        (req.body.Professional_at1 || order.Professional_at1) &&
        (req.body.Professional_at2 || order.Professional_at2) &&
        (req.body.Bim_commander || order.Bim_commander)
      )
        status = 4;
      if (status == 5 && req.body.erp_req) status = 6;
      if (status == 6 && req.body.erp_order) status = 7;
      if ((status == 7 || status == 8) && req.body.invc) status = 9;

      //back
      if (status > 8 && req.body.invc == -1) status = 8;
      if (status > 5) {
        if (req.body.erp_req == -1) status = 5;
        else if (req.body.erp_order == -1) status = 6;

        if (req.body.erp_req == -1) req.body.erp_order = -1;
        if (req.body.erp_order == -1) req.body.invc = -1;
      }
      if (status != current_status) await order.setStatus(status);
      if (status > 6 && req.body.erp_order)
        if (order.document_created) req.body.document_created = true;
      console.log(req.body);
      return Order.update(req.body, {
        where: {
          id: order_id,
        },
      });
    })
    .then((order) =>
      Order.findOne({
        where: {
          id: order_id,
        },
        include: [...order_format],
      }),
    )
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((er) => nx(er));
};

export let confirm_order = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //TODO: get the id of the user send the request
  let soldier_id: number = res.locals.user.soldier_id;
  let field;
  let id = parseInt(req.params.order_id);
  let status = await order_helper.get_status(id);
  if (status != 4)
    next({ status: 401, message: "the order is not in confirm round" });
  let order_confirmers: any = await Order.findOne({
    attributes: ["Bim_commander", "Professional_at1", "Professional_at2"],
    raw: true,
    where: {
      id,
    },
    include: [
      {
        model: MN_Order,
        attributes: ["customer_id"],
        as: "main_order",
      },
    ],
  });
  if (!order_confirmers)
    next({ status: 400, message: "this order was not found on the database" });
  if (order_confirmers["Bim_commander"] == soldier_id) {
    field = "is_cmdr";
  } else if (order_confirmers["Professional_at1"] == soldier_id) {
    field = "is_proffesional_at_1";
  } else if (order_confirmers["Professional_at2"] == soldier_id) {
    field = "is_proffesional_at_2";
  } else if (order_confirmers["main_order.customer_id"] == soldier_id) {
    field = "is_invitor";
  }

  if (field) {
    Order.update(
      { [field]: true },
      {
        where: {
          id,
        },
      },
    )
      .then(function () {
        return Order.findOne({
          attributes: [
            "is_cmdr",
            "is_proffesional_at_1",
            "is_proffesional_at_2",
            "is_invitor",
          ],
          raw: true,
          where: {
            id,
          },
        });
      })
      .then(async (re: any) => {
        if (!Object.values(re).some((x) => !x)) {
          if (status == 4) await Order.update({ status: 5 }, { where: { id } });
        }
        res.status(200).json({ success: "your confirmession was saved" });
      })
      .catch((er) => {
        next({ status: 500, message: er });
      });
  } else
    next({
      status: 401,
      message: "you do not have the permission to confirm order",
    });
};
