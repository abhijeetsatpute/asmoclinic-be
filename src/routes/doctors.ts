import { Router } from "express";
import {
  createDoc,
  getAllDocs,
  getDocByID,
  updateDocByID,
} from "../controllers/doctor";

const router = Router();

router.route("/").post(createDoc);
router.route("/").get(getAllDocs);
router.route("/:id").patch(updateDocByID);
router.route("/:id").get(getDocByID);

export default router;
