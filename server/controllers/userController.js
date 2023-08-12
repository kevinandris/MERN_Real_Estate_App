// ! 4
import asyncHandler from 'express-async-handler'
import { prisma } from '../config/prismaConfig.js'

export const createUser = asyncHandler(async(req, res) => {
    console.log("creating a user");

    let { email } = req.body;

   /*  console.log(email) */

    // check if a user is registered or not
    const userExist = await prisma.user.findUnique({where: {email: email}})

    if (!userExist) {
        const user = await prisma.user.create({data: req.body})
        res.send({
            message: "User registered successfully",
            user: user,
        })
    }
    else {
        res.status(201).send({message: "User already registered"})
    }
})

// function to book a visit to residency
export const bookVisit = asyncHandler(async(req, res) => {
    const { email, date} = req.body
    const { id } = req.params

    try {

        const alreadyBooked = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })

        // if the residency is not booked by a user
        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(404).json({message: "This residency is already booked by you"})
        } else {
            await prisma.user.update({
                where: {email: email},
                data: {
                    bookedVisits: {push : {id, date}}
                }
            })
        }

        res.send("Your visit is booked successfully")
        
    } catch (error) {
        throw new Error(Error.message)
    }
})

// function to get all bookings of a user
export const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body

    try {
        const bookings = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })

        res.status(200).send(bookings)
    } catch (error) {
        throw new Error(error.message)
    }
})

// function to cancel the booking
export const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    try {

        const user = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })

        // iterate of a complete list, this will replace a new id in the index
        const index = user.bookedVisits.findIndex((visit) => visit.id === id) 

        if (index === -1) {
            res.status(404).json({message: "Booking not found"})
        } else {
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: {email},
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
        }

        res.send("Booking cancelled successfully")
        
        
    } catch (error) {
        throw new Error(error.message)
    }
})

// function to add a residency in favorite list of a user
export const toFav = asyncHandler(async(req, res) => {
    const { email } = req.body;
    const { rid } = req.params;

    try {

        const user = await prisma.user.findUnique({
            where: {email}
        })

        if (user.favResidenciesID.includes(rid)) {
            const updateUser = await prisma.user.update({
                where: {email},
                data: {
                    favResidenciesID: {
                        set: user.favResidenciesID.filter((id) => id !== rid)
                    }
                }
            })

            res.send({message: "Removed from favorites", user: updateUser})
        } else {
            const updateUser = await prisma.user.update({
                where: {email},
                data: {
                    favResidenciesID: {
                        push: rid
                    }
                }
            })

            res.send({message: "Updated favorites", user: updateUser})
        }
        
        
    } catch (error) {
        throw new Error(error.message)
    }
})

// function to get all favorites
export const getAllFavorites = asyncHandler(async (req, res) => {
    const {email} = req.body;

    try {
        const favResidency= await prisma.user.findUnique({
            where: {email},
            select: {favResidenciesID: true}
        })

        res.status(200).send(favResidency)
    } catch (error) {
        throw new Error (error.message)
    }
})
