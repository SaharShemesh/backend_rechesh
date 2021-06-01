import { User } from "../models/user";

export const findAll = () => {
  return User.findAll({ include: [{ all: true }] });
};

export const post_order = (details: object) => {
  return User.create(details);
};
