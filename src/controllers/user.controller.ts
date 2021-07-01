import { NextFunction, Request, Response } from "express";
//import * as user_helper from '../helpers/user.helper';
import { Soldier, User } from "../models";

export let get_all = (req: Request, res: Response) => {
  User.findAll({
    include: [{ all: true }],
  })
    .then((users_co) => res.status(200).json(users_co))
    .catch((error) => res.status(400).json({ error }));
};
export let update_users = (req: Request, res: Response, next: NextFunction) => {
  let users = req.body;
  console.log("users = ", users);
  Promise.all(
    users.map((user: any) =>
      User.update(user, {
        where: {
          id: user.id,
        },
      }),
    ),
  )
    .then((users) => next())
    .catch((error) => next(error));
};
// export let create_user = async (req: Request, res: Response) => {
//   try {
//     let order = await user_helper.post_order(req.body);
//     res.status(201).json({ message: "created the user", order });
//   } catch (e) {
//     res.status(400).json({ e });
//   }
// };

export let get_user = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let user_id = req.params.id;
  console.log(user_id);
  let user = await User.findOne({
    where: {
      id: user_id,
    },
  });
  if (!user) next({ message: "user was not found" });
  else res.status(200).json(user);
};

export let user_info = (req: Request, res: Response, next: NextFunction) => {
  //TODO: read user token from header.
  //dummy:
  let id = "8653940"; // user private number
  return User.findOne({
    raw: true,
    include: [
      {
        model: Soldier,
        where: {
          id_num: id,
        },
      },
    ],
  })
    .then((user: any) => {
      if (!user) throw { status: 404, message: "user was not found" };
      res.locals.user = {};
      res.locals.user.name = `${user["soldier.first_name"]} ${user["soldier.last_name"]}`;
      res.locals.user.id_num = user["soldier.id_num"];
      res.locals.user.id = user.id;
      res.locals.user.soldier_id = user["soldier_id"];
      next();
    })
    .catch((err) => next(err));
};
