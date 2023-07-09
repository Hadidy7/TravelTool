import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verification.js"

const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send("Login successful.")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
   res.send("User found.")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
   res.send("Admin access granted.")
})

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;