import { NextFunction, Request, Response } from "express";
import { Paka, Paka_Type, Priority } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Paka.findAll({
      include: [
        {
          model: Paka_Type,
          as: "Paka_type",
        },
        {
          model: Priority,
          as: "Priority",
        },
      ],
    });
    res.status(200).json(data);
  } catch (er) {
    res.status(500).json({ er });
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
  } catch (error) {
    res.status(500).json({ error });
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
  } catch (er) {
    res.status(500).json({ er });
  }
};
