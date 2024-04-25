import { Sequelize } from "sequelize-typescript";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./config";
import { User } from "./entity/user.entity";
import { UserType } from "./entity/userType.entity";
import { Image } from "./entity/image.entity";

const port = DB_PORT ? parseInt(DB_PORT) : undefined;

export const db = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  port,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  models: [User, UserType, Image],
  //   logging: (sql: string) => logger.debug(sql),
  logging: false,
});
db.authenticate();
