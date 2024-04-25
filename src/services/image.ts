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
  console.log(path.join(__dirname, "../../public", image.path));

  fs.unlinkSync(path.join(__dirname, "../../public", image.path));
  const deleteImageEntry = await imageRepo.deleteImage(id);
};