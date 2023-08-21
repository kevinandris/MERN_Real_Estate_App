// ! 4
import express from "express";
import { bookVisit, createUser, getAllBookings, cancelBooking, toFav, getAllFavorites } from "../controllers/userController.js"
// import jwtCheck from "../config/auth0Config.js"; // ==> DOESN'T WORK

const router = express.Router();

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBookings/:id",  cancelBooking)
router.post("/toFav/:rid",  toFav)
router.post("/allFav", getAllFavorites)

export { router as userRoute}