import { Request, Response } from "express";

export const createDoc = (req: Request, res: Response) => {
  res.send("createDoc");
};

export const getAllDocs = (req: Request, res: Response) => {
  res.send("getAllDocs");
};

export const getDocByID = (req: Request, res: Response) => {
  res.send("getDocByID");
};

export const updateDocByID = (req: Request, res: Response) => {
  res.send("updateDocByID");
};
