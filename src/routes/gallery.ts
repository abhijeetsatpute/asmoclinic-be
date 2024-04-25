import { Router } from "express";
import {
  addPhoto,
  getAllPhotos,
  deletePhotoByID,
} from "../controllers/gallery";

const router = Router();

router.route("/").post(addPhoto);
router.route("/").get(getAllPhotos);
router.route("/:id").delete(deletePhotoByID);

export default router;
