import { Router } from "express";
import { addPhoto, getAllPhotos, deletePhotoByID } from "../controllers/image";
import { authenticateUser } from "../middleware/authenticate";

const router = Router();

router.route("/").post(authenticateUser, addPhoto);
router.route("/").get(getAllPhotos);
router.route("/:id").delete(authenticateUser, deletePhotoByID);

export default router;
