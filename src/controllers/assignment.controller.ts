import { NextFunction, Request, Response } from "express";
import { Assignment } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Assignment.findAll({ raw: true });
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
    let types = await Assignment.findAll({
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
    let name = req.body.assign_num;
    let output = await Assignment.create({ assignment_number: name });
    if (output) {
      res.status(201).json({ message: "Assignment was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this assignment" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
