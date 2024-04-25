import { Router } from "express";
import {
  createAdmin,
  loginUser,
  logoutUser,
  showCurrentUser,
} from "../controllers/users";
import { authenticateUser } from "../middleware/authenticate";

const router = Router();

router.route("/register-admin").post(createAdmin);
router.route("/login").post(loginUser);
router.route("/logout").get(authenticateUser, logoutUser);
router.route("/showme").get(authenticateUser, showCurrentUser);

export default router;
