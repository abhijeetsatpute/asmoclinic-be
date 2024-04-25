import { Router } from "express";
import {
  createDoc,
  deleteDocByID,
  getAllDocs,
  getDocByID,
} from "../controllers/doctor";
import { authenticateUser } from "../middleware/authenticate";

const router = Router();

router.route("/").post(authenticateUser, createDoc);
router.route("/").get(getAllDocs);
// router.route("/:id").patch(authenticateUser, updateDocByID);
router.route("/:id").delete(authenticateUser, deleteDocByID);
router.route("/:id").get(getDocByID);

export default router;
