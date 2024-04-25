import { NextFunction, Request, Response } from "express-serve-static-core";
import * as imageService from "../services/image";
import { StatusCodes } from "http-status-codes";
import { Image } from "../entity/image.entity";
import { BadRequestError } from "../errors/bad-request";
import path from "path";

export const addPhoto = async (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.files) {
      throw new BadRequestError("No File Uploaded");
    }
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
      "../../public/uploads/" + `${galleryImage.name}`
    );
    await galleryImage.mv(imagePath);

    const createImageEntry = await imageService.addImage({
      name: galleryImage.name,
      path: `/uploads/${galleryImage.name}`,
      uploadedBy: req.user.userId,
    });

    return res.status(StatusCodes.OK).json({
      msg: "image uploaded",
      image: { path: `/uploads/${galleryImage.name}` },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPhotos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: Image[] = await imageService.getAllPhotos();
    res.status(StatusCodes.OK).send({ images: result, count: result.length });
  } catch (error) {
    next(error);
  }
};

export const deletePhotoByID = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await imageService.deletePhoto(req.params.id);
    // fs.unlinkSync(req.files.image.tempFilePath);
    res.status(StatusCodes.OK).send({ msg: "Image deleted" });
  } catch (error) {
    next(error);
  }
};
