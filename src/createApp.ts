import express from "express";
import usersRouter from "./routes/users";
import docRouter from "./routes/doctors";
import galleryRouter from "./routes/gallery";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { notFoundMiddleware } from "./middleware/not-found";
import cookieParser from "cookie-parser";
import { JWT_SECRET } from "./config";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser(JWT_SECRET));

  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/doctors", docRouter);
  app.use("/api/v1/gallery", galleryRouter);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
