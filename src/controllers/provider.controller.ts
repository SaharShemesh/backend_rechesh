import { NextFunction, Request, Response } from "express";
import { Provider } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Provider.findAll({ raw: true });
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
    let data = await Provider.findAll({
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

// {type_name:"xszxs"}
export const create_one = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let name = req.body.provi_name;
    let output = await Provider.create({ provider_name: name });
    if (output) {
      res.status(201).json({ message: "provider was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this provider" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
