import path from "path";
import { BadRequestError } from "../errors/bad-request";
import * as imageRepo from "../repositories/image";
import fs from "fs";

export const addImage = async (data: any) => {
  const images = await imageRepo.createImageEntry(data);
  return images;
};

export const getAllPhotos = async () => {
  const images = await imageRepo.getAllPhotos();
  return images;
};

export const deletePhoto = async (id: number) => {
  const image = await imageRepo.imageExist(id);
  if (!image) {
    throw new BadRequestError("Image does not exist");
  }
  const imagePath = path.join(__dirname, "../../public", image.path);
  if (fs.existsSync(imagePath)) {
    // If the image file exists, delete it
    fs.unlinkSync(imagePath);
  }
  const deleteImageEntry = await imageRepo.deleteImage(id);
};
