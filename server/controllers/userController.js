// ! 5
import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// ! function to create a user -- POST method on postman
export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let { email } = req.body;

  /*  console.log(email) */

  // * To notify if a user is successfully registered as a first time user
  const userExist = await prisma.user.findUnique({ where: { email: email } });
  if (!userExist) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User registered successfully",
      user: user,
    });
  } else {
    // * check if a user is registered or not
    res.status(201).send({ message: "User already registered" });
  }
});

/* =============================================== */

// ! function to book a visit to residency -- POST method on postman
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    // * if the residency is already booked by a user -- to prevent duplicate books on the same user
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
    }

    res.send("Your visit is booked successfully");
  } catch (error) {
    throw new Error(Error.message);
  }
});

/* ================================================ */

// ! function to get all bookings of a user -- POST method on postman
export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    res.status(200).send(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

/* ================================================ */

// ! function to cancel a booking for a user -- POST method on postman
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    // * iterate of a complete list, this will replace a new id in the index (if a booking is not exist)
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
    }

    res.send("Booking cancelled successfully");
  } catch (error) {
    throw new Error(error.message);
  }
});

/* ================================================== */

// ! function to add a residency in favorite list for a user -- POST method on postman
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });

      res.send({ message: "Removed from favorites", user: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });

      res.send({ message: "Updated favorites", user: updateUser });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

/* ==================================================== */

// ! function to get all favorites -- POST method on postman
export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const favResidency = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });

    res.status(200).send(favResidency);
  } catch (error) {
    throw new Error(error.message);
  }
});

/* ====================================================== */
