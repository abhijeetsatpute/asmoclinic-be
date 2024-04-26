import { NextFunction, Response, Request } from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";

export const addResult = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(StatusCodes.OK).json({
      msg: "addResult",
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
    res.status(StatusCodes.OK).send({ msg: "getAllResults" });
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
    res.status(StatusCodes.OK).send({ msg: "deleteResultByID" });
  } catch (error) {
    next(error);
  }
};
