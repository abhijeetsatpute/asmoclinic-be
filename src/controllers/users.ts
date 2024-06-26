import { Request, Response } from "express-serve-static-core";
import { CreateUser, UserLogin } from "../types/user";
import { StatusCodes } from "http-status-codes";
import * as userService from "../services/user";
import { attachCookiesToResponse } from "../utils/jwt";

export const createAdmin = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: any
) => {
  const { username, email, password } = req.body;
  try {
    const result = await userService.createAdmin({ username, email, password });
    res.status(StatusCodes.CREATED).send({
      user: {
        id: result.id,
        username: result.username,
        email: result.email,
        createdAt: result.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request<{}, {}, UserLogin>,
  res: Response,
  next: any
) => {
  const { username, password } = req.body;
  try {
    const tokenUser = await userService.loginUser({ username, password });

    attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.OK).send(tokenUser);
  } catch (error) {
    next(error);
  }
};

export const showCurrentUser = async (req: any, res: Response) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

export const logoutUser = (req: Request, res: Response) => {
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
