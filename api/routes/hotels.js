import express from "express";
import {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotels,
    countByCity,
  } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verification.js"

const router = express.Router();

//CRUD FUNCTIONS

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);

export default router;