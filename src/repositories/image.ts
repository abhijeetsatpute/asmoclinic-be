import { Image } from "../entity/image.entity";

export function getAllPhotos(): Promise<Image[]> {
  return Image.findAll({});
}

export function createImageEntry(data: any): Promise<Image> {
  return Image.create(data);
}

export function deleteImage(id: number) {
  return Image.destroy({
    where: {
      id,
    },
  });
}

export function imageExist(id: number) {
  const image = Image.findOne({
    where: {
      id,
    },
  });
  return image;
}
