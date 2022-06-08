import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//=================== for check ===========
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });
// router.get("/checkuser/:id",verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id",verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, you are logged in and you can delete all accounts");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET All
router.get("/", verifyAdmin, getUsers);

export default router;
