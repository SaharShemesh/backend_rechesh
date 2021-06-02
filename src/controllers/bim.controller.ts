import { NextFunction, Request, Response } from "express";
import { Bim } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Bim.findAll({ raw: true });
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
    let types = await Bim.findAll({
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
    let bimName = req.body.bim_name;
    let output = await Bim.create({
      bim_name: bimName,
    });
    if (output) {
      res.status(201).json({ message: "Bim was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this Bim" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
