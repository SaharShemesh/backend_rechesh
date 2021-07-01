import { NextFunction, Request, Response } from "express";
import { Provider } from "../models";

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await Provider.findAll({ raw: true });
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
    let data = await Provider.findAll({
      raw: true,
      where: {
        provider_id: id,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};

export let update_providers = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let providers = req.body;
  console.log("providers = ", providers);

  Promise.all(
    providers.map((provider: any) =>
      Provider.update(provider, {
        where: {
          provider_id: provider.provider_id,
        },
      }),
    ),
  )
    .then((providers) => next())
    .catch((error) => next(error));
};

export let get_created = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export let create_providers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let new_providers = req.body;
    let created_providers = await Promise.all(
      new_providers.map((provider: any) => Provider.create(provider)),
    );
    res.status(201).json(created_providers);
  } catch (er) {
    next(er);
  }
};

// {type_name:"xszxs"}
export const create_one = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let name = req.body.provi_name;
    let output = await Provider.create({ provider_name: name });
    if (output) {
      res.status(201).json({ message: "provider was created!" });
    } else {
      res.status(400).json({ error: "problem in creating this provider" });
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" });
  }
};
