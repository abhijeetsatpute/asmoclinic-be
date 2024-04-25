import { Router } from "express";
import { createAdmin, loginUser, logoutUser } from "../controllers/users";

const router = Router();

router.route("/register").post(createAdmin);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

export default router;
