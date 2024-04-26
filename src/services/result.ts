import path from "path";
import { BadRequestError } from "../errors/bad-request";
import * as resultRepo from "../repositories/result";
import fs from "fs";

export const addResult = async (data: any) => {
  const images = await resultRepo.createResultEntry(data);
  return images;
};

export const getAllResults = async () => {
  const images = await resultRepo.getAllResults();
  return images;
};

export const deleteResult = async (id: number) => {
  const result = await resultRepo.resultExist(id);
  if (!result) {
    throw new BadRequestError("Image does not exist");
  }
  const beforeImagePath = path.join(
    __dirname,
    "../../public",
    result.beforeImage
  );
  const afterImagePath = path.join(
    __dirname,
    "../../public",
    result.afterImage
  );
  if (fs.existsSync(beforeImagePath)) {
    // If the image file exists, delete it
    fs.unlinkSync(beforeImagePath);
  }
  if (fs.existsSync(afterImagePath)) {
    // If the image file exists, delete it
    fs.unlinkSync(afterImagePath);
  }
  const deleteImageEntry = await resultRepo.deleteResult(id);
};
