import { NextFunction, Request, Response } from "express";
import { Pulling_Bag } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Pulling_Bag.findAll({ raw: true });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
export const get_created = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Pulling_Bag.findAll({ raw: true });
    data = data.splice(0, data.length - req.body.length);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
export const get_one = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let id = parseInt(req.params.id);
  try {
    let types = await Pulling_Bag.findAll({
      raw: true,
      where: {
        id: id,
      },
    });
    res.status(200).json(types);
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};

// {type_name:"xszxs"}
export const create_one = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let num = req.body.bag_number;
    let desc = req.body.bag_description;
    let sum = req.body.sum_budget;
    let output = await Pulling_Bag.create({
      bag_number: num,
      bag_description: desc,
      sum_budget: sum,
    });
    if (output) {
      res.status(201).json({ message: "Pulling bag was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this pulling bag" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};

export const create_bags = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let pulling_bags = req.body;
    let created = await Promise.all(
      pulling_bags.map((pulling_bag: any) => Pulling_Bag.create(pulling_bag)),
    );
    res.json(created).status(201);
  } catch (er) {
    next(er);
  }
};
export const update_bags = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let pulling_bags = req.body;
  return Promise.all(
    pulling_bags.map((pulling_bag: any) =>
      Pulling_Bag.update(pulling_bag, {
        where: {
          bag_id: pulling_bag.bag_id,
        },
      }),
    ),
  )
    .then(() => {
      next();
    })
    .catch((er) => {
      next(er);
    });
};
