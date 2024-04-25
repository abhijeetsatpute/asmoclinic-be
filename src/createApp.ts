import express from "express";
import usersRouter from "./routes/users";
import docRouter from "./routes/doctors";
import galleryRouter from "./routes/image";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { notFoundMiddleware } from "./middleware/not-found";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { JWT_SECRET } from "./config";
import path from "path";

export function createApp() {
  const app = express();

  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.json());
  app.use(cookieParser(JWT_SECRET));
  app.use(fileUpload({ useTempFiles: true, tempFileDir: "./public/tmp" }));

  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/doctors", docRouter);
  app.use("/api/v1/gallery", galleryRouter);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
