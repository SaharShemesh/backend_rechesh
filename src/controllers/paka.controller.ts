import { NextFunction, Request, Response } from "express";
import { Paka } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Paka.findAll({ raw: true });
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
    let types = await Paka.findAll({
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
    let PakaTeam = req.body.paka_team;
    let depName = req.body.department_name;
    let uniName = req.body.unit_name;
    let output = await Paka.create({
      paka_team: PakaTeam,
      department_name: depName,
      unit_name: uniName,
    });
    if (output) {
      res.status(201).json({ message: "Paka was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this paka" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
