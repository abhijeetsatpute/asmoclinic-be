import { Request, Response } from "express";
import { CreateUser, UserLogin } from "../types/user";
import { StatusCodes } from "http-status-codes";
import * as userService from "../services/user";

export const createAdmin = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: any
) => {
  const { username, email, password } = req.body;
  try {
    const result = await userService.createAdmin({ username, email, password });
    res.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    next(error);
  }
};

export const loginUser = (req: Request<{}, {}, UserLogin>, res: Response) => {
  const { username, password } = req.body;
};

export const logoutUser = (req: Request, res: Response) => {
  res.send("logoutUser");
};
