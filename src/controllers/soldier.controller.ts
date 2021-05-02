import { NextFunction, Request, Response } from "express";
import { Soldier } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Soldier.findAll({ raw: true });
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
    let types = await Soldier.findAll({
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
    let name = req.body.first_name;
    let lastName = req.body.last_name;
    let idNum = req.body.id_num;
    let output = await Soldier.create({
      first_name: name,
      last_name: lastName,
      id_num: idNum,
    });
    if (output) {
      res.status(201).json({ message: "Soldier was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this soldier" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
