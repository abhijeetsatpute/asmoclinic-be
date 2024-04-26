import { Router } from "express";
import {
  addResult,
  getAllResults,
  deleteResultByID,
} from "../controllers/result";
import { authenticateUser } from "../middleware/authenticate";

const router = Router();

router.route("/").post(authenticateUser, addResult);
router.route("/").get(getAllResults);
router.route("/:id").delete(authenticateUser, deleteResultByID);

export default router;
