import { Doctor } from "../entity/doctor.entity";

export function getAllDocs(): Promise<Doctor[]> {
  return Doctor.findAll({});
}

export function getDocByID(id: number) {
  return Doctor.findOne({
    where: {
      id,
    },
  });
}

export function createDoc(data: any) {
  return Doctor.create(data);
}

export function deleteDoc(id: number) {
  return Doctor.destroy({
    where: {
      id,
    },
  });
}
