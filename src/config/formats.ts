import {
  Assignment,
  Base_Hierarchy,
  Bid,
  Bid_Item,
  Bim,
  Budget_Type,
  Creator,
  Iaf_Num,
  Measurement,
  Order,
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
export const sell_item_format = {
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
};
export const order_format = [
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
    include: [Bid_Item],
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
];
export const fetching_format = {
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
      include: [...order_format],
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
