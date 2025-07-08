const express = require("express")
const router = express.Router()

const {createBooking, getBookings} = require("./bookingsController")

router.post("/", async (req, res) => {
    try {
        const booking = await createBooking(req.body)
         res.json({
      message: "Booking has been successfully created",
      payload: booking,
    });
    } catch (error) {
        res.json({
        message: "failure",
        payload: error.message,
    });
}
})
router.get("/", async (req,res) => {
    try {
        const bookings = await getBookings(req.query.category)
        res.json({
      message: "Bookings have been successfully found",
      payload: bookings,
    });
    } catch (error) {
        res.json({
        message: "failure",
        payload: error.message,
        });
        
    }
})



module.exports = router