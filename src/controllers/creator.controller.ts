import { NextFunction, Request, Response } from "express";
import { Creator } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Creator.findAll({ raw: true });
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
    let types = await Creator.findAll({
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
    let name = req.body.creator_name;
    let num = req.body.creator_num;
    let output = await Creator.create({
      creator_name: name,
      creator_num: num,
    });
    if (output) {
      res.status(201).json({ message: "Creator was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this creator" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
