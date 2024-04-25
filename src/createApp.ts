import express from "express";
import usersRouter from "./routes/users";
import docRouter from "./routes/doctors";
import galleryRouter from "./routes/gallery";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/doctors", docRouter);
  app.use("/api/v1/gallery", galleryRouter);

  return app;
}
