import { NextFunction, Request, Response } from "express";
import { Base_Hierarchy } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Base_Hierarchy.findAll({ raw: true });
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
    let types = await Base_Hierarchy.findAll({
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
    let depName = req.body.department_name;
    let uniName = req.body.unit_name;
    let output = await Base_Hierarchy.create({
      bim_name: bimName,
      department_name: depName,
      unit_name: uniName,
    });
    if (output) {
      res.status(201).json({ message: "Base hierarchy was created!" });
    } else {
      res
        .status(400)
        .json({ error: "problem in creating this base hierarchy" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
