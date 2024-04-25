import { User } from "../entity/user.entity";
import { CreateUser } from "../types/user";
import * as userRepo from "../repositories/user";
import { BadRequestError } from "../errors/bad-request";

export const createAdmin = async (user: CreateUser) => {
  const adminExist = await userRepo.AdminExists();
  if (adminExist) {
    throw new BadRequestError("Admin already exists");
  }

  // return await userRepo.registerAdmin({
  //   username: user.username,
  //   email: user.email,
  //   userTypeId: 1,
  //   password: user.password,
  // });
};
