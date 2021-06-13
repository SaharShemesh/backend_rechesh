import { NextFunction, Request, Response } from "express";
import { Iaf_Num } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Iaf_Num.findAll({ raw: true });
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
    let data = await Iaf_Num.findAll({
      raw: true,
      where: {
        id,
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
    let name = req.body.iaf_num;
    let output = await Iaf_Num.create({ type: name });
    if (output) {
      res.status(201).json({ message: "iaf num was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this iaf num" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
