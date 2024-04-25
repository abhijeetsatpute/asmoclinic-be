import { Router } from "express";
import { createAdmin, loginUser, logoutUser } from "../controllers/users";

const router = Router();

router.route("/register-admin").post(createAdmin);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

export default router;
