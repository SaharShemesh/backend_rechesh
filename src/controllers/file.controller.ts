import { NextFunction, Request, Response } from "express";
import { File } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await File.findAll({ raw: true });
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
    let types = await File.findAll({
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
    let name = req.body.name;
    let mainReq = req.body.main_request;
    let secReq = req.body.secondary_request;
    let bidId = req.body.bd_id;
    let output = await File.create({
      name: name,
      main_request: mainReq,
      secondary_request: secReq,
      bd_id: bidId,
    });
    if (output) {
      res.status(201).json({ message: "file was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this file" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
