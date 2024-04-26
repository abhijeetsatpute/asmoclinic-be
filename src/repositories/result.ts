import { Result } from "../entity/result.entity";

export function createResultEntry(data: any): Promise<Result> {
  return Result.create(data);
}

export function getAllResults(): Promise<Result[]> {
  return Result.findAll({});
}

export function resultExist(id: number) {
  const image = Result.findOne({
    where: {
      id,
    },
  });
  return image;
}

export function deleteResult(id: number) {
  return Result.destroy({
    where: {
      id,
    },
  });
}
