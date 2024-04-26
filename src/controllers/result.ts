import { NextFunction, Response, Request } from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/bad-request";
import path from "path";
import * as resultService from "../services/result";
import { Result } from "../entity/result.entity";

export const addResult = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.files) {
      throw new BadRequestError("No File Uploaded");
    }
    const beforeImage = req.files.before;
    const afterImage = req.files.after;
    if (
      !beforeImage.mimetype.startsWith("image") ||
      !afterImage.mimetype.startsWith("image")
    ) {
      throw new BadRequestError("Please Upload Image");
    }

    const maxSize = 1024 * 1024;
    if (beforeImage.size > maxSize || afterImage.size > maxSize) {
      throw new BadRequestError("Please upload image smaller 1MB");
    }
    const beforeImagePath = path.join(
      __dirname,
      "../../public/uploads/result/" + `${beforeImage.name}`
    );
    const afterImagePath = path.join(
      __dirname,
      "../../public/uploads/result/" + `${afterImage.name}`
    );

    await beforeImage.mv(beforeImagePath);
    await afterImage.mv(afterImagePath);

    const createResultEntry = await resultService.addResult({
      beforeImage: `/uploads/result/${beforeImage.name}`,
      afterImage: `/uploads/result/${afterImage.name}`,
    });

    return res.status(StatusCodes.OK).json({
      msg: "addResult",
      images: {
        beforeImage: `/uploads/result/${beforeImage.name}`,
        afterImage: `/uploads/result/${afterImage.name}`,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllResults = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: Result[] = await resultService.getAllResults();
    res.status(StatusCodes.OK).send({ results: result, count: result.length });
  } catch (error) {
    next(error);
  }
};

export const deleteResultByID = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await resultService.deleteResult(req.params.id);
    res.status(StatusCodes.OK).send({ msg: "Result Deleted" });
  } catch (error) {
    next(error);
  }
};
