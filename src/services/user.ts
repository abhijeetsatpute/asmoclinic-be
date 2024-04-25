import { User } from "../entity/user.entity";
import { CreateUser, UserLogin } from "../types/user";
import * as userRepo from "../repositories/user";
import { BadRequestError } from "../errors/bad-request";
import { UnauthenticatedError } from "../errors/unauthenticated";
import bcrypt from "bcrypt";
import { createTokenUser } from "../utils/createTokenUser";
import { UserType } from "../entity/userType.entity";
import { attachCookiesToResponse } from "../utils/jwt";

export const createAdmin = async (user: CreateUser) => {
  const adminExist = await userRepo.AdminExists();
  if (adminExist) {
    throw new BadRequestError("Admin already exists");
  }

  return await userRepo.registerAdmin({
    username: user.username,
    email: user.email,
    userTypeId: 1,
    password: user.password,
  });
};

export const loginUser = async ({ username, password }: UserLogin) => {
  const user = await User.findOne({
    where: {
      username,
    },
    include: [UserType],
  });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const tokenUser = createTokenUser(user);
  return tokenUser;
};
