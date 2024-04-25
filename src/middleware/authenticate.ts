import { Request, Response, NextFunction } from "express";
import { isTokenValid } from "../utils/jwt";
import { UnauthenticatedError } from "../errors/unauthenticated";
import { tokenPayload } from "../types/user";
import { JwtPayload } from "jsonwebtoken";

export const authenticateUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.signedCookies;

  try {
    const accesspayload: any = isTokenValid(accessToken);
    req.user = accesspayload;
    return next();
  } catch (error) {
    next(new UnauthenticatedError("Authentication Invalid"));
  }
};
