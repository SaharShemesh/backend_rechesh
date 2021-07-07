import { NextFunction, Request, Response } from "express";
import { Status } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Status.findAll({ raw: true });
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
    let data = await Status.findAll({
      raw: true,
      where: {
        type_id: id,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};

export const update_status = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statuses = req.body;
  return Promise.all(
    statuses.map((status: any) =>
      statuses.update(statuses, {
        where: {
          id: status.id,
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

// {type_name:"xszxs"}
export const create_one = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let name = req.body.stat;
    let output = await Status.create({ status: name });
    if (output) {
      res.status(201).json({ message: "status was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this status" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
