import { User } from "../entity/user.entity";

export function registerAdmin(newUser: any): Promise<User> {
  return User.create({ ...newUser });
}

export function AdminExists() {
  const admin = User.findOne({
    where: {
      userTypeId: 1,
    },
  });
  return admin;
}
