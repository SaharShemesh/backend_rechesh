import { Order } from "../models/order";
import { MN_Order } from "../models/mn_order";
import {
  Assignment,
  Base_Hierarchy,
  Bid,
  Creator,
  Provider,
  Sell_Item,
  Soldier,
  Status,
  Unit,
  User,
} from "../models";
const fetching_format = {
  attributes: ["id"],
  include: [
    {
      model: Soldier,
      as: "Customer",
      // //@ts-ignore
      // include: [
      //   {
      //     model: Base_Hierarchy,
      //     as: "Location",
      //   },
      //   {
      //     model: Soldier,
      //   },
      // ],
    },
    {
      model: Order,
      //@ts-ignore
      include: [
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
      ],
      attributes: [
        "id",
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

export const post_order = (details: any) => {
  return MN_Order.create(details)
    .then(async (main_order: MN_Order) => {
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
      return true;
    })
    .catch((error) => error);
};

export const find_one = (id: number) => {
  return MN_Order.findOne({
    where: {
      id,
    },
  });
};

export const delete_order = (id: number) => {
  return MN_Order.destroy({
    where: {
      id,
    },
  });
};
