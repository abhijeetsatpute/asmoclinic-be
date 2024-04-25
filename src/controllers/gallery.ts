import { Request, Response } from "express";

export const addPhoto = (req: Request, res: Response) => {
  res.send("addPhoto");
};

export const getAllPhotos = (req: Request, res: Response) => {
  res.send("getAllPhotos");
};

export const deletePhotoByID = (req: Request, res: Response) => {
  res.send("deletePhotoByID");
};
