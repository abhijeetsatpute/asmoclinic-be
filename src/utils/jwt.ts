import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { tokenPayload } from "../types/user";

export const createJWT = ({ payload }: any) => {
  if (!JWT_SECRET) {
    throw new Error("JWT key is not defined");
  }
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

export const isTokenValid = (token: string): JwtPayload | String => {
  if (!JWT_SECRET) {
    throw new Error("JWT key is not defined");
  }
  return jwt.verify(token, JWT_SECRET);
};

export const attachCookiesToResponse = ({ res, user }: any) => {
  const accessTokenJWT = createJWT({ payload: user });

  const oneDay = 1000 * 60 * 60 * 24;
  const longerExp = 1000 * 60 * 60 * 24 * 30;

  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + longerExp),
  });
};
