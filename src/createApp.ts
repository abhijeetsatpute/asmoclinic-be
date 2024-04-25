import express from "express";
import usersRouter from "./routes/users";
import docRouter from "./routes/doctors";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/doctors", docRouter);

  return app;
}
