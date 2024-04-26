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
import cors from "cors";
import helmet from "helmet";
import xss from "xss";
import rateLimiter from "express-rate-limit";

export function createApp() {
  const app = express();

  app.set("trust proxy", 1);
  app.use(
    rateLimiter({
      windowMs: 1 * 60 * 1000,
      max: 100,
    })
  );
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  );
  const corsOptions = {
    // set origin to a specific origin.
    // origin: "http://localhost:3000",

    // or, set origin to true to reflect the request origin
    origin: true,

    credentials: true,
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  // app.use(xss());

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
