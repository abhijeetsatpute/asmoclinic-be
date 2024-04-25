import { NextFunction, Request, Response } from "express";
import { Doctor } from "../entity/doctor.entity";
import * as doctorService from "../services/doctor";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/bad-request";
import path from "path";

export const createDoc = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user);

  let doctorImage = "";
  if (!req.files?.image) {
    doctorImage = "/uploads/doctor/default.jpg";
  } else {
    const galleryImage = req.files.image;
    if (!galleryImage.mimetype.startsWith("image")) {
      throw new BadRequestError("Please Upload Image");
    }
    const maxSize = 1024 * 1024;
    if (galleryImage.size > maxSize) {
      throw new BadRequestError("Please upload image smaller 1MB");
    }
    const imagePath = path.join(
      __dirname,
      "../../public/uploads/doctor/" + `${galleryImage.name}`
    );
    await galleryImage.mv(imagePath);
    doctorImage = `/uploads/doctor/${galleryImage.name}`;
  }

  const doctor = await doctorService.createDoc({
    ...req.body,
    createdBy: req.user.userId,
    image: doctorImage,
  });

  return res.status(StatusCodes.OK).json({
    msg: "Doctor created",
    doctor,
  });
};

export const getAllDocs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: Doctor[] = await doctorService.getAllDocs();
    res.status(StatusCodes.OK).send({ doctors: result, count: result.length });
  } catch (error) {
    next(error);
  }
};

export const getDocByID = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: any = await doctorService.getDocByID(req.params.id);
    if (!result) {
      throw new BadRequestError("No doctor found");
    }
    res.status(StatusCodes.OK).send({ result });
  } catch (error) {
    next(error);
  }
};

// TODO
// export const updateDocByID = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   res.send("updateDocByID");
// };

export const deleteDocByID = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await doctorService.deleteDoc(req.params.id);
    // fs.unlinkSync(req.files.image.tempFilePath);
    res.status(StatusCodes.OK).send({ msg: "Doctor deleted" });
  } catch (error) {
    next(error);
  }
};
