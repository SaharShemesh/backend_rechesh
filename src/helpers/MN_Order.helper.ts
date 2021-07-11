import { Order } from "../models/order";
import { MN_Order } from "../models/mn_order";
import {
  Assignment,
  Base_Hierarchy,
  Bid,
  Bim,
  Budget_Type,
  Creator,
  Iaf_Num,
  Measurement,
  Order_Type,
  Paka,
  Paka_Type,
  Priority,
  Priority_Type,
  Procument_Type,
  Provider,
  Pulling_Bag,
  Sell_Item,
  Soldier,
  Status,
  Unit,
  User,
} from "../models";
import { response } from "express";
const fetching_format = {
  attributes: ["id"],
  include: [
    {
      model: Soldier,
      as: "Customer",
      // //@ts-ignore
      include: [
        {
          model: User,
          include: [
            {
              model: Base_Hierarchy,
              as: "Location",
              include: [
                {
                  model: Bim,
                  as: "bim",
                  include: [{ model: Unit }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      model: Order,
      //@ts-ignore
      include: [
        {
          model: Paka,
          as: "Paka",
          include: [
            {
              model: Paka_Type,
              as: "Paka_type",
            },
          ],
        },
        {
          model: Priority,
          as: "Priority",
        },
        { model: Soldier, as: "bim_commander" },
        { model: Soldier, as: "proffesional_authority" },
        { model: Soldier, as: "proffesional_authority_1" },
        { model: Soldier, as: "proffesional_authority_2" },
        { model: Assignment },
        {
          model: Budget_Type,
          as: "Budget_type",
        },
        {
          model: Priority_Type,
        },
        {
          model: Procument_Type,
          as: "Procument_Type",
        },
        {
          model: Order_Type,
          as: "Order_type",
        },
        {
          model: Bid,
          as: "Bids",
          include: [Sell_Item],
        },
        {
          model: Sell_Item,
          attributes: {
            exclude: ["sub_order", "provider", "creator", "unit"], //,""]
          },
          include: [
            {
              model: Provider,
              as: "Provider",
            },
            {
              model: Creator,
              as: "Creator",
            },
            {
              model: Iaf_Num,
            },
            {
              model: Measurement,
              as: "Measurement",
            },
            // {
            //   model: Unit,
            //   as: "Unit",
            // },
          ],
        },
        {
          model: Bid,
          as: "Win_bid",
        },
        {
          model: Status,
          as: "Status",
          attributes: ["id"],
        },
        {
          model: Pulling_Bag,
          as: "Pulling_bag",
        },
      ],
      attributes: [
        "id",
        "paka_desc",
        "document_created",
        "erp_order",
        "erp_req",
        "invc",
        "need",
        "schedule",
        "start_date",
        "is_invitor",
        "is_cmdr",
      ],
    },
  ],
};

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
