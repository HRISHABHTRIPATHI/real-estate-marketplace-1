import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  getListings,
  updateListing,
} from "../controllers/listing.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);

router.get("/get/:id", getListing);

router.delete("/delete/:id", verifyToken, deleteListing);

router.put("/update/:id", verifyToken, updateListing);
router.get("/get", getListings);

export default router;