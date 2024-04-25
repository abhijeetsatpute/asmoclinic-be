import * as dotenv from "dotenv";

dotenv.config();

export const {
  NODE_ENV,
  PORT,
  DB_DIALECT,
  DB_PORT,
  DB_HOST,
  LOG_DIR,
  DB_PASS,
  DB_USER,
  DB_NAME,
  TOKEN_EXPIRATION,
  JWTKEY,
  REACT_APP_BASE_URL,
} = process.env;
