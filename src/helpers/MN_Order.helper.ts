import {MN_Order} from '../models/mn_order';

export const findAll = () => {
   return MN_Order
    .findAll({ include: [{ all: true }] })
}

export const post_order = (details:object) => {
     return MN_Order.create(details);
}