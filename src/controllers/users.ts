import { Request, Response } from "express";

export const createAdmin = (req: Request, res: Response) => {
  res.send("createAdmin");
};

export const loginUser = (req: Request, res: Response) => {
  res.send("loginUser");
};

export const logoutUser = (req: Request, res: Response) => {
  res.send("logoutUser");
};
