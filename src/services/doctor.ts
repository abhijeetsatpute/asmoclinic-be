import { BadRequestError } from "../errors/bad-request";
import * as docRepo from "../repositories/doctor";

export const getAllDocs = async () => {
  return await docRepo.getAllDocs();
};

export const getDocByID = async (id: number) => {
  return await docRepo.getDocByID(id);
};

export const createDoc = async (data: any) => {
  return await docRepo.createDoc(data);
};

export const deleteDoc = async (id: number) => {
  const doctor = await docRepo.getDocByID(id);
  if (!doctor) {
    throw new BadRequestError("Doctor does not exist");
  }
  return await docRepo.deleteDoc(id);
};
