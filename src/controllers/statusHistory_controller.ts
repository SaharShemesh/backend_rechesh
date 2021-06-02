import { NextFunction, Request, Response } from "express";
import { Status_History } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Status_History.findAll({ raw: true });
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
    let types = await Status_History.findAll({
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
    let comments = req.body.comments;
    let status = req.body.status;
    let order = req.body.order;
    let part = req.body.part;
    let fieldIndex = req.body.field_index;
    let newVal = req.body.new_value;
    let oldVal = req.body.old_value;
    let output = await Status_History.create({
      comments: comments,
      status: status,
      order: order,
      part: part,
      field_index: fieldIndex,
      new_value: newVal,
      old_value: oldVal,
    });
    if (output) {
      res.status(201).json({ message: "Status history was created!" });
    } else {
      res
        .status(400)
        .json({ error: "problem in creating this status history" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
