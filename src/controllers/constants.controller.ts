import { NextFunction, Request, Response } from "express";
import { Constants } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Constants.findAll({ raw: true });
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
    let types = await Constants.findAll({
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
    let name = req.body.type;
    let con = req.body.condition;
    let priVal = req.body.price_value;
    let output = await Constants.create({
      type: name,
      condition: con,
      price_value: priVal,
    });
    if (output) {
      res.status(201).json({ message: "Constants were created!" });
    } else {
      res.status(400).json({ error: "problem in creating these constants" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
