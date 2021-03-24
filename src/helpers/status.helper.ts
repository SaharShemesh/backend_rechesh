import { Order } from "../models/order";

export const validate_status = (id: number, ...statuses: number[]) => {
  //id = sub order id
  return Order.findOne({
    where: {
      id,
    },
    attributes: ["status"],
  }).then((order: any) => {
    if (!order) throw false;

    let status = order.status;
    return statuses.find((status_value) => status_value == status) != undefined;
  });
};
