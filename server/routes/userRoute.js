// ! 5
import express from "express"
import { bookVisit, createUser, getAllBookings, cancelBooking, toFav, getAllFavorites } from "../controllers/userController.js"

const router = express.Router();

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBookings/:id", cancelBooking)
router.post("/toFav/:id", toFav)
router.post("/allFav", getAllFavorites)

export { router as authRoute}