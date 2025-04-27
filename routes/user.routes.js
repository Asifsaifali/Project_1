import express from "express";
import {
  registerUser,
  getAllUser,
  getUserByEmail,
  verifyUser,
  userLogin,
  userProfile,
} from "../controller/user.controller.js";
import isLoggedin from "../middleware/user.middleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.get("/data", getAllUser);
router.get("/singleuser", getUserByEmail);
router.get("/verify/:token", verifyUser);
router.post("/login", userLogin);
router.post("/profile", isLoggedin, userProfile);

export default router;
