require("dotenv").config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_NAME,
};
module.exports = {
  development: {
    ...config,
    seederStorage: "sequelize",
    seederStorageTableName: "seeder_data",
  },
  test: {
    ...config,
  },
  production: {
    ...config,
    seederStorage: "sequelize",
    seederStorageTableName: "seeder_data",
  },
};
